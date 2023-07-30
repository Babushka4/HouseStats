import matplotlib.pyplot as plt
import os


# Создание графика
def create_chart():
    # Ваш код для создания графика с использованием Matplotlib

    x = [1, 2, 3, 4, 5]
    y = [2, 4, 6, 8, 10]
    plt.plot(x, y)
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title('Статистический график')

    # Assuming your static directory is located in the same directory as your Python file
    static_dir = os.path.dirname(__file__)[:-6] + 'static/charts/'

    # Сохранение графика во временный файл
    plt.savefig(static_dir)

create_chart()