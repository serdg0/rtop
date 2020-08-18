const prodToTitles = product => {
  const { translations: { en: { title: enTitle }, es: { title: esTitle } } } = product;
  return {
    en: enTitle,
    es: esTitle,
  };
};

const mapProdToTitles = products => products.map(prod => prodToTitles(prod));
export { prodToTitles, mapProdToTitles };
