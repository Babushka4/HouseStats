from bs4 import BeautifulSoup
import json
import aiohttp
import asyncio
import requests


def extract_data(html_text: str):
    print(html_text)
    bs = BeautifulSoup(html_text, 'html.parser')
    all_data = bs.find_all("li", ['OffersSerpItem'])

    if not all_data:
        print('have no target data')
        return None

    result = {}

    for i, x in enumerate(all_data):
        size = x.find_all("span", ['OffersSerpItem__title'])[0].text
        info = x.find_all('div', ['OffersSerpItem__building'])[0].text
        image_src = x.find_all('img', ['Gallery__activeImg', 'OffersSerpItem__planImage'])[0]['src']

        result[i] = {
            'size': size,
            'info': info,
            'image_src': image_src}

        return json.dumps(result, ensure_ascii=True)


async def get_data(url='https://realty.ya.ru/yaroslavl/kupit/kvartira/', num_page: int = 1):
    async with aiohttp.ClientSession() as session:

        task_list = []
        for num in range(1, num_page + 1):

            current_url = url + f'?page={num}'
            print(f'page {num} is parsing')

            task = asyncio.create_task(fetch(session, current_url))
            task_list.append(task)
            # response = await fetch(session, current_url)
            # print(extract_data(response))

        await asyncio.gather(*task_list)


async def fetch(session, url):

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.0.2526 Yowser/2.5 Safari/537.36',
        'Cookie': 'ys=newsca.native_cache#def_bro.0; yandex_gid=144271; yuidss=4195861891689744133; is_gdpr=0; is_gdpr_b=CO3+UxDQwwEoAg==; _ym_uid=1689744138454050122; my=YwA=; yandex_login=; i=QdV6ZJ2mZCzsKPueze0RgrkUek5sDURHR4hZ+gmY+Pg7SeygKr820ArK5QSmGXR4Nya1CgYloOtFoQS8yCS2acTNus4=; yandexuid=9234445761689612181; mda2_beacon=1690201262707; yandex_csyr=1690201262; suid=865c3fec6159d3be053486a5a7d6e6d0.cbd0781c7c143dc032b04d495eac0d9f; exp_uid=703ae991-2ce5-4533-9a3f-74c8d9aa37f3; font_loaded=YSv1; link_to_global_tooltip_shown=YES; adSource=yandex_direct%2C1690368271423%2C460_67550027_msk_poisk_tgo_newbuilding_common_adsource%2Ccid%3A67550027%7Cgid%3A4748775467%7Caid%3A11405341635%7Cph%3A44260587574%7Cpt%3Apremium%7Cpn%3A1%7Csrc%3Anone%7Cst%3Asearch; _yasc=Diko3djQrmHEo8jk637GCfMb0UdEzWVA66Z9v2Ui4b4ItGwEuTOaMBa6v02rnXj0oXPs; sae=0:70DF6137-2A4F-43E3-AE18-E96E1731ABDF:p:23.7.0.2526:w:d:RU:20191020; yp=1690531337.uc.ru#1690531337.duc.ru#1721208141.cld.2270452#1690453937.gpauto.57_684029:39_790325:140:1:1690446737#1691428750.hdrc.1#2005284076.pcs.0#1705512138.szm.1:1920x1080:1920x964#1927903738.multib.1#1693058094.csc.1#4294967295.skin.s; _csrf_token=dc03c593b9f10f66204fa66c652b4ce7cc015cc630cc8158; Cookie_check=checked; from=direct; prev_uaas_data=9234445761689612181%23806480%23777710%23783477%23792260%23213159%23361532%23610827%23763480%23765891; prev_uaas_expcrypted=wbQTIydAMrRPbtwyu46TRvcp7v-Flco6zigggglEPnQiKlfp8tLm6ZU1sl4xfnaq0HzKxVlGPOBbPh7Y1PxuTgveYZcRC5E9pXN5JBTXJ51V5n5rhoPISbAfo2lusWzBvDO-mSxqcdP7uXSf9b9MwA%2C%2C; rgid=556547; _yasc=MLeGPHcDIsF/WuxZ6k8znm4aiMmE+GkqaM/MUuC7vsPvdMQnYn5FDGUjtbN9fxg6ed37; gdpr=0; _ym_d=1690446755; from_lifetime=1690446752276; _ym_isad=2'
    }

    async with session.get(url, headers=headers) as response:
        result = await response.text()

        if result:
            print('success parsed')
        else:
            print('parsing failed')

        print(extract_data(result))


loop = asyncio.get_event_loop()
loop.run_until_complete(get_data())