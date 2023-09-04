/**
 *
 * @param {obj} obj
 * @returns
 * 메뉴 리스트 obj 를 넣으면 path, name, fullPath 를 배열형태로 담아서 obj로 리턴
 */
export const getMenuStepName = (obj) => {
  let fullPath = [];
  let path = [];
  let name = [];
  let lv1Menu;
  let lv2Menu;
  let lv3Menu;
  for (let i = 0; obj.length > i; i++) {
    lv1Menu = obj[i].name;
    for (let j = 0; obj[i].under.length > j; j++) {
      lv2Menu = obj[i].under[j].name;
      if (obj[i].under[j].under === null) {
        path.push(obj[i].under[j].path);
        name.push(obj[i].under[j].name);
        fullPath.push(lv1Menu + "★" + lv2Menu);
      } else {
        for (let k = 0; obj[i].under[j].under.length > k; k++) {
          lv3Menu = obj[i].under[j].under[k].name;
          if (obj[i].under[j].under[k].under === null) {
            path.push(obj[i].under[j].under[k].path);
            name.push(obj[i].under[j].under[k].name);
            fullPath.push(lv1Menu + "★" + lv2Menu + "★" + lv3Menu);
          }
        }
      }
    }
  }
  return { path: path, name: name, fullPath: fullPath };
};
