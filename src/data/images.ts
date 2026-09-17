/**
 * Central image catalog for How2Host.
 *
 * All photography is hot-linked from Unsplash (free to use under the Unsplash
 * License). To swap in real client screenshots/photos later, replace the URLs
 * below — every component reads from this file only.
 *
 * Tip: keep widths modest (~1200w) for performance.
 */

const U = "https://images.unsplash.com";
const params = "w=1200&q=80&auto=format&fit=crop";

export const img = {
  /* ---------- food & drink ---------- */
  cafeInterior: `${U}/photo-1554118811-1e0d58224f24?${params}`,
  latteArt: `${U}/photo-1511920170033-f8396924c348?${params}`,
  brunchPlate: `${U}/photo-1533089860892-a7c6f0a88666?${params}`,
  coffeeBeans: `${U}/photo-1447933601403-0c6688de566e?${params}`,
  fineDining: `${U}/photo-1414235077428-338989a2e8c0?${params}`,
  plating: `${U}/photo-1600891964599-f61ba0e24092?${params}`,
  chef: `${U}/photo-1577219491135-ce391730fb2c?${params}`,
  pasta: `${U}/photo-1621996346565-e3dbc646d9a9?${params}`,
  dessert: `${U}/photo-1551024506-0bccd828d307?${params}`,
  winePour: `${U}/photo-1510812431401-41d2bd2722f3?${params}`,

  /* ---------- business & office ---------- */
  teamMeeting: `${U}/photo-1522071820081-009f0129c71c?${params}`,
  office: `${U}/photo-1497366216548-37526070297c?${params}`,
  handshake: `${U}/photo-1521791136064-7986c2920216?${params}`,
  skyline: `${U}/photo-1486406146926-c627a92ad1ab?${params}`,
  retailShop: `${U}/photo-1441986300917-64674bd600d8?${params}`,
  storefront: `${U}/photo-1534723452862-4c874018d66d?${params}`,
  boutiqueRack: `${U}/photo-1567401893414-76b7b1e5a7a5?${params}`,
  conference: `${U}/photo-1540575467063-178a50c2df87?${params}`,

  /* ---------- wellness & fitness ---------- */
  salonWork: `${U}/photo-1560066984-138dadb4c035?${params}`,
  salonInterior: `${U}/photo-1633681926022-84c23e8cb2d6?${params}`,
  spa: `${U}/photo-1544161515-4ab6ce6db874?${params}`,
  gym: `${U}/photo-1534438327276-14e5300c3a48?${params}`,
  training: `${U}/photo-1571019613454-1cb2f99b2d8b?${params}`,
  yoga: `${U}/photo-1545205597-3d9d02c29597?${params}`,

  /* ---------- product & saas ---------- */
  dashboard: `${U}/photo-1460925895917-afdab827c52f?${params}`,
  analytics: `${U}/photo-1551288049-bebda4e38f71?${params}`,
  code: `${U}/photo-1555066931-4365d14bab8c?${params}`,
  cafeBarista: `${U}/photo-1559925393-8be0ec4767c8?${params}`,
  restaurantHall: `${U}/photo-1517248135467-4c7edcad34c4?${params}`,
  coffeePour: `${U}/photo-1495474472287-4d71bcdd2085?${params}`,
  marketProduce: `${U}/photo-1488459716781-31db52582fe9?${params}`,
  marketStall: `${U}/photo-1533900298318-6b8da08a523e?${params}`,
} as const;

/** Small helper to shrink a catalog URL for thumbnail-sized usage. */
export function thumb(url: string, width = 640) {
  return url.replace(/w=1200/, `w=${width}`);
}
