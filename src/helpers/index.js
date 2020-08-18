const prodToTitles = product => {
  const { id, translations: { en: { title: enTitle }, es: { title: esTitle } } } = product;
  return {
    en: enTitle,
    es: esTitle,
    id,
  };
};

const mapProdToTitles = products => products.map(prod => prodToTitles(prod));
export { prodToTitles, mapProdToTitles };
