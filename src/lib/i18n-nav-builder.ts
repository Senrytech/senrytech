import { rawNavMeta, buildNavHref, type ValidLocale, type I18nSchema } from '../lib/nav-base';

/**
 * 拼接元数据 + 当前语言翻译，生成完整可渲染导航数组
 * @param locale 当前语种
 * @param langData 导入的i18n语言包（en/zh-CN等）
 */
export function buildFullNav(locale: ValidLocale, langData: I18nSchema) {
  const translationList = langData.nav;

  return rawNavMeta.map((meta, index) => {
    const trans = translationList[index];
    const href = buildNavHref(locale, meta.path);

    // 组装二级子菜单
    const subList = meta.subMetaList
      ?.map((subMeta, subIdx) => {
        const subTrans = trans.subLabels?.[subIdx];
        if (!subTrans) return null;
        return {
          ...subMeta,
          label: subTrans.label,
          href: buildNavHref(locale, subMeta.path),
        };
      })
      .filter(Boolean); // 剔除null

    // 组装产品组
    let productGroup: Record<string, Array<{ name: string; desc: string; href: string }>> | undefined;
    if (meta.productGroupMeta && trans.productTexts) {
      productGroup = {};
      for (const groupKey of Object.keys(meta.productGroupMeta)) {
        const metaItems = meta.productGroupMeta[groupKey];
        const textItems = trans.productTexts[groupKey];
        productGroup[groupKey] = metaItems.map((prodMeta, prodIdx) => ({
          ...textItems[prodIdx],
          href: buildNavHref(locale, prodMeta.path),
        }));
      }
    }

    return {
      label: trans.label,
      href,
      ...meta,
      subList,
      productGroup,
    };
  });
}
