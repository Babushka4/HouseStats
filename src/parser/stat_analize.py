import matplotlib.pyplot as plt
import os


# Создание графика
def create_chart(data: dict, compared_values: list):

    x_values = [sub_dict[compared_values[0]] for sub_dict in data.values()]
    y_values = [sub_dict[compared_values[1]] for sub_dict in data.values()]

    plt.scatter(x_values, y_values)

    plt.xlabel(compared_values[0])
    plt.ylabel(compared_values[1])
    plt.title('Статистический график')

    # Assuming your static directory is located in the same directory as your Python file
    static_dir = os.path.dirname(__file__)[:-6] + 'static/charts/'

    # Сохранение графика во временный файл
    plt.savefig(static_dir)

