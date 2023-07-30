from bs4 import BeautifulSoup
import requests
from src.parser.stat_analize import create_chart


def parse_yandex_subpage(url_list: list):
    amount_data = {}
    for url in url_list:
        request = requests.get(url)
        bs = BeautifulSoup(request.text, 'html.parser')

        meter_and_room = bs.find_all('div', ['OfferCardSummaryInfo__description--1eQMI'])[0].text.replace('\xa0', '')
        i = meter_and_room.index('²') + 1
        meter_count = meter_and_room[:i -2].replace(',', '.')
        room_count = meter_and_room[i+2: i+3]
        meter_cost = bs.find_all('div', ['OfferCardSummaryInfo__pricePerMeterExtra--3Onhy'])[0].text.replace('\xa0', '')[:-7]

        total_cost = bs.find_all('span',
                                 ['OfferCardSummaryInfo__price--3WinQ OfferCardSummaryInfo__priceWithLeftMargin--dZLTe'])[0].text.replace('\xa0', '')[:-2]

        result = {
            'Площадь': float(meter_count),
            'Комнат': int(room_count),
            'Цена за метр': int(meter_cost),
            'Итоговая цена': int(total_cost)
        }
        amount_data[url] = result

    return amount_data


def parse_yandex(limit: int = -1):
    url = "https://realty.ya.ru/yaroslavl/kupit/kvartira/"

    request = requests.get(url)
    bs = BeautifulSoup(request.text, 'html.parser')

    all_data = bs.find_all("li", ['OffersSerpItem'])

    result = []

    for i, x in enumerate(all_data):

        if i == limit:
            return result

        size = x.find_all("span", ['OffersSerpItem__title'])[0].text
        info = x.find_all('div', ['OffersSerpItem__building'])[0].text
        image_src = x.find_all('img', ['Gallery__activeImg', 'OffersSerpItem__planImage'])[0]['src']
        more_info = x.find_all('a', ['Link Link_js_inited', 'Link_size_m',
                                     'Link_theme_islands', 'SerpItemLink', 'OffersSerpItem', 'link'])[0]['href']

        result.append({
            'size': size,
            'info': info,
            'image_src': 'https:' + image_src,
            'more_info': 'https://realty.ya.ru/' + more_info
        })

    return result


if __name__ == '__main__':
    to_analize = parse_yandex_subpage(['https://realty.ya.ru/offer/6116957244935418471/',
                                       'https://realty.ya.ru/offer/3767659616994028669/',
                                       'https://realty.ya.ru/offer/5069187592276761856/'])

    create_chart(data=to_analize, compared_values=['Цена за метр', 'Итоговая цена'])
