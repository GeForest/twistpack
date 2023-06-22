# import import_def
import random as rd
import eel


eel.init("web")

@eel.expose
def getJS(numbTwists):
    print(numbTwists)
    x = twistPack(numbTwists)
    callInJsItems(x)


def callInJsItems(x):
    eel.callWinnerItems(x)
    print(x)

# def callInJsStrars(v):
#     eel.call_stars(v)
#     print(v)

# print(a)
nums = [0.6, 5.1, 94.3]
bannerIsFiveStarsPerson = ['Аяка', 'Кэ Цин', 'Ци Ци', 'Джинн', 'Тигнари', 'Мона', 'Дилюк']
bannerIsFourStarsPerson = [ 'Мика', 'Сахароза', 'Диона', 'Яо Яо', 'Фарузан', 'Лайла', 'Кандакия', 'Дори',
                           'Коллеи', 'Куки Синобу', 'Юнь Цзинь', 'Сиканоин Хэйдзо', 'Кудзё Сара',
                           'Горо  Саю', 'Тома', 'Янь Фэй', 'Розария', 'Синь Янь', 'Чун Юнь', 'Ноэлль', 'Беннет', 'Фишль',
                           'Нин Гуан', 'Син Цю', 'Бэй Доу', 'Сян Лин', 'Рэйзор', 'Барбара']
bannerIsThreeArms = ['Рогатка', 'Клятва стрелка', 'Лук ворона', 'Изумрудный шар', 'Эпос о драконоборцах',
                     'Руководство по магии', 'Чёрная кисть', 'Дубина переговоров', 'Меч драконьей крови',
                     'Металлическая тень', 'Меч небесного всадника', 'Предвестник зари',
                     'Холодное лезвие']

# promoGems = 100
# numbTwists = 0
countFiftyStars = 0
countFourStars = 0
countFiveGuarant = 0
countFourGuarant = 0
numbStars = 0

def twistPack(n):
    # countFourStars = 0   # Подсчет для 10 круток (Гарант 4 звезды)
    # countFiftyStars = 0  # Подсчет для 50 крутки (Гарант 5 звезды)
    # global winnerItems
    winnerItems = []
    winnerStars = []
    for i in range(n):
        global countFourStars
        global countFiftyStars
        global countFiveGuarant
        global countFourGuarant
        global numbStars
        a = rd.uniform(0, 100)
        countFourStars += 1
        countFiftyStars += 1
        if 0 <= a and a <= 0.6 or countFiftyStars == 50:
            print('5 stars')
            numbStars = numbStars - numbStars + 5
            winnerStars.append(numbStars)
            upperChance = rd.randint(0, 1)
            # import_def.dropFive(upperChance, countFiveGuarant, bannerIsFiveStarsPerson, rd, winnerItems,
            #                     countFiftyStars, countFourStars)
            if upperChance == 1:
                favoritesPerson = bannerIsFiveStarsPerson[:1]
                winnerItems.append(favoritesPerson)
                if countFiveGuarant == 1:
                    countFiveGuarant -= 1
                print(upperChance)
            elif countFiveGuarant == 1:
                favoritesPerson = bannerIsFiveStarsPerson[:1]
                winnerItems.append(favoritesPerson)
                countFiveGuarant -= 1
            elif upperChance == 0:
                dontFavorites = bannerIsFiveStarsPerson[2:]
                rd.shuffle(dontFavorites)
                winFiveStars = rd.choice(dontFavorites)
                winnerItems.append(winFiveStars)
                countFiveGuarant += 1
                print(upperChance)
            countFiftyStars -= countFiftyStars
            if countFourStars == 10:
                countFourStars -= 10
            if countFiftyStars == 50:
                countFiftyStars -= 50
                countFourStars -= 10
        elif 0.6 < a and a <= 5.1 or countFourStars == 10:
            print('4 stars')
            numbStars = numbStars - numbStars + 4
            winnerStars.append(numbStars)
            upperChance = rd.randint(0, 1)
            print(upperChance)
            if upperChance == 1:
                favoritesPerson = bannerIsFourStarsPerson[:3]
                winFourStars = rd.choice(favoritesPerson)
                winnerItems.append(str(winFourStars))
                if countFourGuarant == 1:
                    countFourGuarant -= 1
                print(upperChance)
            elif countFourGuarant == 1:
                favoritesPerson = bannerIsFourStarsPerson[:3]
                winFourStars = rd.choice(favoritesPerson)
                winnerItems.append(str(winFourStars))
                countFourGuarant -= 1
            elif upperChance == 0:
                dontFavorites = bannerIsFourStarsPerson[4:]
                rd.shuffle(dontFavorites)
                winFourStars = rd.choice(dontFavorites)
                winnerItems.append(winFourStars)
                countFourGuarant += 1
                print(upperChance)
            countFourStars -= countFourStars
            if countFourStars == 10:
                countFourStars -= 10
        elif 5.1 < a:
            print('3 stars')
            numbStars = numbStars - numbStars + 3
            winnerStars.append(numbStars)
            rd.shuffle(bannerIsThreeArms)
            winThreeStars = rd.choice(bannerIsThreeArms)
            winnerItems.append(winThreeStars)
        print(a)
        print(countFiftyStars)
        print(countFourStars)
        print(countFiveGuarant)
        print(countFourGuarant)
        print(winnerStars)
    print(winnerItems)
    return winnerItems, winnerStars
    # print(promoGems)

eel.start("main.html", size=(1200, 800))

# while numbTwists >= 1:
#     n = numbTwists
#     # primoGems -= n
#     # print(promoGems)
#     twistPack(n)

# promoGems = 100
# countFiftyStars = 0
# countFourStars = 0
# countFiveGuarant = 0
# countFourGuarant = 0
# def twistPack(n):
#     #countFourStars = 0   # Подсчет для 10 круток (Гарант 4 звезды)
#     #countFiftyStars = 0  # Подсчет для 50 крутки (Гарант 5 звезды)
#     winnerItems = []
#     for i in range(n):
#         global countFourStars
#         global countFiftyStars
#         global countFiveGuarant
#         global countFourGuarant
#         a = rd.uniform(0, 100)
#         countFourStars += 1
#         countFiftyStars += 1
#         if 0 <= a and a <= 0.6 or countFiftyStars == 50:
#             print('5 stars')
#             upperChance = rd.randint(0, 1)
#             import_def.dropFive(upperChance, countFiveGuarant, bannerIsFiveStarsPerson, rd, winnerItems, countFiftyStars, countFourStars)
#             # if upperChance == 1:
#             #     favoritesPerson = bannerIsFiveStarsPerson[:1]
#             #     winnerItems.append(str(favoritesPerson))
#             #     if countFiveGuarant == 1:
#             #         countFiveGuarant -= 1
#             #     print(upperChance)
#             # elif countFiveGuarant == 1:
#             #     favoritesPerson = bannerIsFiveStarsPerson[:1]
#             #     winnerItems.append(str(favoritesPerson))
#             #     countFiveGuarant -= 1
#             # elif upperChance == 0:
#             #     dontFavorites = bannerIsFiveStarsPerson[2:]
#             #     rd.shuffle(dontFavorites)
#             #     winFiveStars = rd.choice(dontFavorites)
#             #     winnerItems.append(winFiveStars)
#             #     countFiveGuarant += 1
#             #     print(upperChance)
#             countFiftyStars -= countFiftyStars
#             if countFourStars == 10:
#                 countFourStars -= 10
#             if countFiftyStars == 50:
#                 countFiftyStars -= 50
#                 countFourStars -= 10
#         elif 0.6 < a and a <= 5.1 or countFourStars == 10:
#             print('4 stars')
#             upperChance = rd.randint(0, 1)
#             print(upperChance)
#             if upperChance == 1:
#                 favoritesPerson = bannerIsFourStarsPerson[:3]
#                 winFourStars = rd.choice(favoritesPerson)
#                 winnerItems.append(str(winFourStars))
#                 if countFourGuarant == 1:
#                     countFourGuarant -= 1
#                 print(upperChance)
#             elif countFourGuarant == 1:
#                 favoritesPerson = bannerIsFourStarsPerson[:3]
#                 winFourStars = rd.choice(favoritesPerson)
#                 winnerItems.append(str(winFourStars))
#                 countFourGuarant -= 1
#             elif upperChance == 0:
#                 dontFavorites = bannerIsFourStarsPerson[4:]
#                 rd.shuffle(dontFavorites)
#                 winFourStars = rd.choice(dontFavorites)
#                 winnerItems.append(winFourStars)
#                 countFourGuarant += 1
#                 print(upperChance)
#             countFourStars -= countFourStars
#             if countFourStars == 10:
#                 countFourStars -= 10
#         elif 5.1 < a:
#             print('3 stars')
#             rd.shuffle(bannerIsThreeArms)
#             winThreeStars = rd.choice(bannerIsThreeArms)
#             winnerItems.append(winThreeStars)
#         print(a)
#         print(countFiftyStars)
#         print(countFourStars)
#         print(countFiveGuarant)
#         print(countFourGuarant)
#     print(winnerItems)
#     print(promoGems)
# while promoGems >= 1:
#     n = int(input('Введите сколько хотите сделать круток: '))
#     promoGems -= n
#     # print(promoGems)
#     twistPack(n)
