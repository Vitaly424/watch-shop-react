export const formatterRub = (number: number): string => {
    const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });
    return formatter.format(number);
}
