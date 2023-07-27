from bs4 import BeautifulSoup
import json
import requests


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

        result.append({
            'size': size,
            'info': info,
            'image_src': 'https:' + image_src})

    return result


if __name__ == '__main__':
    print(parse_yandex())
