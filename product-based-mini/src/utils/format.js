function money(amount = 0) {
    return `$ ${Number(amount).toLocaleString("en-IN")}`;
}
module.exports = money;