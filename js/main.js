// curl "https://www.tianqiapi.com/api/?version=v1"

window.onload = function () {
    var xhr = new XMLHttpRequest();

    xhr.open('post', 'https://www.tianqiapi.com/api/?version=v1');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var mess = JSON.parse(xhr.responseText);
                var city_name = document.getElementById('city-name');
                var header = document.getElementById('header');
                var air_quality_num = document.getElementById('air-quality-num');
                var air_quality_value = document.getElementById('air-quality-value');
                var temperature_now = document.getElementById('temperature-now');
                var weather_now = document.getElementsByClassName('weather-now');
                var show = document.getElementById('show');
                var tips = document.getElementById('tips');
                var max_min_now = document.getElementById('max-min-now');
                var img_now = document.getElementById('img-now');
                var max_min_tomorrow = document.getElementById('max-min-tomorrow');
                var weather_tomorrow = document.getElementById('weather-tomorrow');
                var img_tomorrow = document.getElementById('img-tomorrow');
                var hours_scroll = document.getElementById('hours-scroll');
                var hours_item = document.getElementsByClassName('hours-item');
                var hours_temperature = document.getElementsByClassName('hours-temperature');
                var hours_img = document.getElementsByClassName('hours-img');
                var days_week = document.getElementsByClassName('days-week');
                var days_date = document.getElementsByClassName('days-date');
                var days_weather = document.getElementsByClassName('days-weather');
                // var  = document.getElementById('');
                // var  = document.getElementsByClassName('');
                var days_img = document.getElementsByClassName('days-img');
                var days_wind = document.getElementsByClassName('days-wind');
                var days_wind_speed = document.getElementsByClassName('days-wind-speed');
                var life_item = document.getElementsByClassName('life-item');
                var level = document.getElementsByClassName('level');
                var title = document.getElementsByClassName('title');
                var hid_tips = document.getElementById('hid-tips');
                var tips_title = document.getElementById('tips-title');
                var tips_submit = document.getElementById('tips-submit');
                var tips_close = document.getElementById('tips-close');
                var cover = document.getElementById('cover');
                var switch_city = document.getElementById('switch-city');
                var search = document.getElementById('search');
                var search_cancel = document.getElementById('search-cancel');
                var city_box = document.getElementById('city-box');


                city_name.innerHTML = mess.city;
                air_quality_num.innerHTML = mess.data[0].air;
                air_quality_value.innerHTML = mess.data[0].air_level;
                temperature_now.innerHTML = mess.data[0].tem;
                weather_now[0].innerHTML = mess.data[0].wea;
                weather_now[1].innerHTML = mess.data[0].wea;
                show.innerHTML = mess.data[0].win[0] + " " + mess.data[0].win_speed;

                tips.innerHTML = mess.data[0].air_tips;
                max_min_now.innerHTML = mess.data[0].tem1 + "/" + mess.data[0].tem2;
                switch (mess.data[0].wea_img) {
                    case 'yun':
                        img_now.src = "./img/weather/cloudy.png";
                        header.style.backgroundImage = "url(./img/background/cloud.jpg)";
                        break;

                    case 'lei':
                        img_now.src = "./img/weather/thunder.png";
                        header.style.backgroundImage = "url(./img/weather/thunder.jpg)";
                        break;

                    case 'qing':
                        img_now.src = "./img/weather/sunny.png";
                        header.style.backgroundImage = "url(./img/weather/clear.jpg)";
                        break;

                    case 'yin':
                        img_now.src = "./img/weather/overcast.png";
                        header.style.backgroundImage = "url(./img/weather/overcast.jpg)";
                }
                max_min_tomorrow.innerHTML = mess.data[1].tem1 + "/" + mess.data[1].tem2;
                weather_tomorrow.innerHTML = mess.data[1].wea;
                switch (mess.data[1].wea_img) {
                    case 'yun':
                        img_tomorrow.src = "./img/weather/cloudy.png";
                        break;

                    case 'lei':
                        img_tomorrow.src = "./img/weather/thunder.png";
                        break;

                    case 'qing':
                        img_tomorrow.src = "./img/weather/sunny.png";
                        break;

                    case 'yin':
                        img_tomorrow.src = "./img/weather/overcast.png";

                }
                hours_scroll.style.width = mess.data[0].hours.length * 62.5 + "px";
                for (let i = 0; i < mess.data[0].hours.length; i++) {
                    hours_item[i].childNodes[1].innerHTML = mess.data[0].hours[i].day;
                    switch (mess.data[0].hours[i].wea) {
                        case "晴":
                            hours_img[i].src = "./img/weather/sunny.png";
                            break;

                        case "阴":
                            hours_img[i].src = "./img/weather/overcast.png";
                            break;

                        case "多云":
                            hours_img[i].src = "./img/weather/cloudy.png";
                            break;

                        case "小雨": case "中雨": case "大雨": case "阵雨":
                            hours_img[i].src = "./img/weather/rainy.png";
                    }
                    hours_temperature[i].innerHTML = mess.data[0].hours[i].tem;
                }
                for (let j = 0; j < 7; j++) {
                    days_week[j].innerHTML = mess.data[j].week;
                    days_date[j].innerHTML = mess.data[j].date;
                    days_weather[j].innerHTML = mess.data[j].wea;
                    switch (mess.data[j].wea_img) {
                        case 'yun':
                            days_img[j].src = "./img/weather/cloudy.png";
                            break;

                        case 'lei':
                            days_img[j].src = "./img/weather/thunder.png";
                            break;

                        case 'qing':
                            days_img[j].src = "./img/weather/sunny.png";
                            break;

                        case 'yin':
                            days_img[j].src = "./img/weather/overcast.png";
                    }
                    days_wind[j].innerHTML = mess.data[j].win[0];
                    days_wind_speed[j].innerHTML = mess.data[j].win_speed;
                }
                for (let m = 0; m < 6; m++) {
                    var color = ['#ff99cc', '#9999ff', '#ff6600', '#33cc33', '#33ccff', '#66cc99'];
                }
                for (let k = 0; k < 6; k++) {
                    level[k].innerHTML = mess.data[0].index[k].level;
                    if (mess.data[0].index[k].level == null) {
                        level[k].innerHTML = "加油";
                    }
                    life_item[k].onclick = function () {
                        hid_tips.style.display = 'block';
                        tips_title.style.background = color[k];
                        tips_close.style.background = color[k];
                        tips_title.innerHTML = title[k].innerHTML;
                        tips_submit.innerHTML = mess.data[0].index[k].desc;
                        cover.style.display = 'block';
                        cover.style.height = '1380px';
                        tips_close.onclick = function () {
                            hid_tips.style.display = 'none';
                            cover.style.display = 'none';
                        }
                    }
                }
                // alert(mess.city);
                switch_city.onclick = function () {
                    search.style.display = 'block';
                    for (let n = 0; n < mess.city.length; n++) {
                        var li = document.createElement('li');
                        li.innerHTML = mess.city[n];
                        city_box.appendChild(li);
                    }
                    search_cancel.onclick = function () {
                        search.style.display = 'none';
                        for (let i = city_box.childNodes.length - 1; i >= 0; i--) {
                            city_box.removeChild(city_box.childNodes[i]);
                        }
                    }
                }


                // var canvas = document.getElementById("canvas");
                // var ctx = canvas.getContext('2d');
                // var chartData = [
                //     { x: 1, y: mess.data[0].tem },
                //     { x: 2, y: mess.data[1].tem },
                //     { x: 3, y: mess.data[2].tem },
                //     { x: 4, y: mess.data[3].tem },
                //     { x: 5, y: mess.data[4].tem },
                //     { x: 6, y: mess.data[5].tem },
                //     { x: 7, y: mess.data[6].tem },
                //     { x: 8, y: mess.data[7].tem }
                // ];


                // var LineChart = function (ctx) {
                //     /*获取绘图工具*/
                //     var canvas = document.getElementById("canvas");
                //     var ctx = canvas.getContext('2d');
                //     ctx.strokeStyle = '#eee';
                //     /*画布的大小*/
                //     this.canvasWidth = this.ctx.canvas.width;
                //     this.canvasHeight = this.ctx.canvas.height;
                //     /*坐标系的间距*/
                //     this.space = 85.7;
                //     /*坐标原点*/
                //     this.x0 = this.space;
                //     this.y0 = this.canvasHeight - this.space;
                //     /*绘制点*/
                //     this.dottedSize = 6;
                //     /*点的坐标 和数据有关系  数据可视化*/
                // }
                // LineChart.prototype.init = function (data) {
                //     this.drawGrid();
                //     this.drawAxis();
                //     this.drawDotted(data);
                // };

                // LineChart.prototype.drawDotted = function (data) {
                //     /*1.数据的坐标 需要转换 canvas坐标*/ /*2.再进行点的绘制*/ /*3.把线连起来*/
                //     var that = this;
                //     /*记录当前坐标*/

                //     var prevCanvasX = 0;
                //     var prevCanvasY = 0;
                //     data.forEach(function (item, i) {
                //         /* x = 原点的坐标 + 数据的坐标 */ /* y = 原点的坐标 - 数据的坐标 */
                //         var canvasX = that.x0 + item.x;
                //         var canvasY = that.y0 - item.y;
                //           /*绘制点*/ that.ctx.beginPath();
                //         that.ctx.moveTo(canvasX - that.dottedSize / 2, canvasY - that.dottedSize / 2);
                //         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY - that.dottedSize / 2);
                //         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY + that.dottedSize / 2);
                //         that.ctx.lineTo(canvasX - that.dottedSize / 2, canvasY + that.dottedSize / 2);
                //         that.ctx.closePath(); that.ctx.fill();
                //         /*点的连线*/ /*当时第一个点的时候 起点是 x0 y0*/ /*当时不是第一个点的时候 起点是 上一个点*/
                //         if (i == 0) {
                //             that.ctx.beginPath();
                //             that.ctx.moveTo(that.x0, that.y0);
                //             that.ctx.lineTo(canvasX, canvasY);
                //             that.ctx.stroke();
                //         } else {
                //             /*上一个点*/
                //             that.ctx.beginPath();
                //             that.ctx.moveTo(prevCanvasX, prevCanvasY);
                //             that.ctx.lineTo(canvasX, canvasY);
                //             that.ctx.stroke();
                //         }
                //         /*记录当前的坐标，下一次要用*/
                //         prevCanvasX = canvasX; prevCanvasY = canvasY;
                //     });
                // };
                // var chartData = [
                //     { x: 1, y: mess.data[0].tem },
                //     { x: 2, y: mess.data[1].tem },
                //     { x: 3, y: mess.data[2].tem },
                //     { x: 4, y: mess.data[3].tem },
                //     { x: 5, y: mess.data[4].tem },
                //     { x: 6, y: mess.data[5].tem },
                //     { x: 7, y: mess.data[6].tem },
                //     { x: 8, y: mess.data[7].tem }
                // ];
                // var lineChart = new LineChart();
                // lineChart.init(chartData);







            }
        }
    }




}