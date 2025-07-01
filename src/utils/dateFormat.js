import dayjs from "dayjs";
import "dayjs/locale/zh-cn"; // 中文语言包
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// 初始化插件和配置
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("zh-cn"); // 设置为中文

/**
 * 获取当前中国日期（xx月xx日）
 * @param {boolean} zeroPad 是否补零（默认 false，如 "6月5日"）
 * @returns {string} 格式化的日期字符串
 */
export function getCurrentChineseDate(zeroPad = false) {
  const format = zeroPad ? "MM月DD日" : "M月D日";
  return dayjs().tz("Asia/Shanghai").format(format);
}

/**
 * 计算 x 天后的中国日期（xx月xx日）
 * @param {number} days 天数（可正可负）
 * @param {boolean} zeroPad 是否补零（默认 false）
 * @returns {string} 格式化的日期字符串
 */
export function getDateAfterDays(days, zeroPad = false) {
  const format = zeroPad ? "MM月DD日" : "M月D日";
  return dayjs().tz("Asia/Shanghai").add(days, "day").format(format);
}

/**
 * 计算两个中国日期(xx月xx日)之间的天数差值
 * @param {string} dateStr1 第一个日期，格式为"xx月xx日"
 * @param {string} dateStr2 第二个日期，格式为"xx月xx日"
 * @returns {number} 两个日期的天数差值（date2 - date1）
 */
export function getDaysDiffBetweenChineseDates(dateStr1, dateStr2) {
  // 获取当前年份（用于构造完整日期）
  const currentYear = dayjs().year();
  // 解析日期字符串（添加当前年份）
  const parseChineseDate = (str) => {
    const [month, day] = str
      .split("月")
      .map((s) => parseInt(s.replace("日", "")));
    return dayjs(`${currentYear}-${month}-${day}`).tz("Asia/Shanghai");
  };
  const date1 = parseChineseDate(dateStr1);
  const date2 = parseChineseDate(dateStr2);
  // 计算天数差值
  return date2.diff(date1, "day");
}

/**
 * 使用dayjs格式化中国日期
 * @param {Date} date - Date实例
 * @param {boolean} [zeroPad=false] - 是否补零
 * @returns {string} 格式化后的日期字符串
 */
export function dayjsFormatChineseDate(date, zeroPad = false) {
  const format = zeroPad ? "MM月DD日" : "M月D日";
  return dayjs(date).format(format);
}

export function convertChineseDateToDots(chineseDate) {
  const res = chineseDate?.match(/(\d{1,2})月(\d{1,2})日/);
  const month = res[1].padStart(2, 0);
  const day = res[2].padStart(2, 0);
  return month + "." + day;
}
