from bs4 import BeautifulSoup
import json
import requests


def parse_yandex_subpage(url: str):
    request = requests.get(url)
    bs = BeautifulSoup(request.text, 'html.parser')

    data_div = bs.find_all('div', ['OfferCard__techFeatures--1YKu1 OfferCardHighlights__root--2XIOU'])[0]

    values = [div.text.replace('\xa0', '') for div in data_div.find_all('div',
                                                                        ['OfferCardHighlights__featureValue--2wfJ7'])]

    cost = bs.find_all('div', ['OfferCardFeature__text--3NIwE'])[0].text.replace('\xa0', '')
    total_cost = bs.find_all('span',
                             ['OfferCardSummaryInfo__price--3WinQ OfferCardSummaryInfo__priceWithLeftMargin--dZLTe'])[0].text.replace('\xa0', '')

    result = {
        'square': float(values[0][:-2].replace(',', '.')),
        'etaj': int(values[1][:-5]),
        'year': int(values[2][:-4]),
        'cost_by_meter': int(cost[:-7]),
        'total_cost': int(total_cost[:-2])
    }
    return result


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
    print(parse_yandex_subpage('https://realty.ya.ru/offer/6116957244935418471/'))
