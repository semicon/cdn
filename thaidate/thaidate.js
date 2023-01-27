
function customDateFormat(currentDate,formatType){
  var day=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
  var dayShort=["อา","จ","อ","พ","พฤ","ศ","ส"];
  var month=["มกราคม","กุมพาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
  var monthShort=["ม.ค.","ก.พ.","มี.ค","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  var date1=new Date(currentDate);
  var d1=date1.getDay(); // ลำดับของวันในสัปดาห์ 0=วันอาทิตย์
  var d2=date1.getDate();  // วันที่ 1 หลัก
  var d3=Utilities.formatString("%02d", date1.getDay()); // วันที่ 2 หลัก
  var m1=date1.getMonth();  // ลำดับของเดือน 0=มกราคม
  var m2=date1.getMonth()+1;  // เดือน 1 หลัก
  var m3=Utilities.formatString("%02d", date1.getMonth()+1); // เดือน 2 หลัก
  var y1=date1.getFullYear();
  var dateFormat="";
  switch (formatType){
    case "1": // 01 ม.ค. 2566
      dateFormat=d3 + " " + monthShort[m1] + " " + (parseInt(y1)+543);
      break;
    case "2": // 1 ม.ค. 2566
      dateFormat=d2 + " " + monthShort[m1] + " " + (parseInt(y1)+543);
      break;
    case "3": // 01 มกราคม 2566
      dateFormat=d3 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
    case "4": // 1 มกราคม 2566
      dateFormat=d2 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
    case "5": // 1/1/2566
      dateFormat= d2 + "/" + m2 + "/" + (parseInt(y1)+543);
      break;
    case "6": // 01/01/2566
      dateFormat= d3 + "/" + m3 + "/" + (parseInt(y1)+543);
      break;
    case "7": // วันพฤหัสบดีที่ 1 มกราคม 2566
      dateFormat="วัน" + day[d1] + "ที่ " + d2 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
    case "8": // วันพฤหัสบดีที่ 01 มกราคม 2566
      dateFormat="วัน" + day[d1] + "ที่ " + d3 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
    case "9": // อา., 1 มกราคม 2566
      dateFormat=dayShort[d1] + ", " + d2 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
    case "0": // อา., 01 มกราคม 2566
      dateFormat=dayShort[d1] + ", " + d3 + " " + month[m1] + " " + (parseInt(y1)+543);
      break;
  }
  return dateFormat;
}

var dateth =Utilities.parseDate("26-01-2023", Session.getScriptTimeZone(), "dd-MM-yyyy");
