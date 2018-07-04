/* eslint-disable */
export default {
  userinfo: {
    "status": 1000,
    "context": {
      "confirmedCriteria": [{
        "name": "VENDOR_ID",
        "description": "快递公司",
        "type": "singleSelect",
        "isDefault": true,
        "isActive": true,
        "valueLabelList": [{"value": "5", "label": "如风达", "valueLabelList": null}, {
          "value": "1",
          "label": "全球邮政特快专递",
          "valueLabelList": null
        }, {"value": "4", "label": "百世快递", "valueLabelList": null}, {
          "value": "2",
          "label": "顺丰速运",
          "valueLabelList": null
        }, {"value": "3", "label": "中通快递", "valueLabelList": null}, {
          "value": "9",
          "label": "ec.frontend.carrierName.MOCK",
          "valueLabelList": null
        }, {"value": "6", "label": "顺丰-O2O", "valueLabelList": null}, {
          "value": "7",
          "label": "圆通速递",
          "valueLabelList": null
        }, {"value": "8", "label": "美食送", "valueLabelList": null}, {
          "value": "11",
          "label": "中铁快运",
          "valueLabelList": null
        }, {"value": "12", "label": "跨越速运", "valueLabelList": null}]
      }, {
        "name": "SEARCH_KEYWORD",
        "description": "",
        "type": "text",
        "isDefault": true,
        "isActive": true
      }, {
        "name": "CREATION_START_END_TIME",
        "description": "创建时间",
        "type": "dateRange",
        "isDefault": false,
        "isActive": false,
        "startParamName": "START_TIME",
        "endParamName": "END_TIME"
      },  {
        "name": "SEARCH_KEYWORD",
        "description": "",
        "type": "text",
        "isDefault": true,
        "isActive": true
      }, 
      {
        "name": "CREATION_START_END_TIME",
        "description": "创建时间",
        "type": "dateRange",
        "isDefault": false,
        "isActive": false,
        "startParamName": "START_TIME",
        "endParamName": "END_TIME"
      },
        {
          "name": "PROVINCE_CITY",
          "description": "",
          "type": "twoLayerSelect",
          "isDefault": true,
          "isActive": true,
          "layerOneName": "PROVINCE",
          "layerOneDescription": "省份",
          "layerTwoName": "CITY",
          "layerTwoDescription": "城市",
          "valueLabelList": [{
            "value": "安徽",
            "label": "安徽",
            "valueLabelList": [{"value": "安庆", "label": "安庆", "valueLabelList": null}, {
              "value": "蚌埠",
              "label": "蚌埠",
              "valueLabelList": null
            }, {"value": "池州", "label": "池州", "valueLabelList": null}, {
              "value": "滁州",
              "label": "滁州",
              "valueLabelList": null
            }, {"value": "阜阳", "label": "阜阳", "valueLabelList": null}, {
              "value": "合肥",
              "label": "合肥",
              "valueLabelList": null
            }, {"value": "淮北", "label": "淮北", "valueLabelList": null}, {
              "value": "淮南",
              "label": "淮南",
              "valueLabelList": null
            }, {"value": "黄山", "label": "黄山", "valueLabelList": null}, {
              "value": "六安",
              "label": "六安",
              "valueLabelList": null
            }, {"value": "马鞍山", "label": "马鞍山", "valueLabelList": null}, {
              "value": "宿州",
              "label": "宿州",
              "valueLabelList": null
            }, {"value": "铜陵", "label": "铜陵", "valueLabelList": null}, {
              "value": "芜湖",
              "label": "芜湖",
              "valueLabelList": null
            }, {"value": "宣城", "label": "宣城", "valueLabelList": null}, {
              "value": "亳州",
              "label": "亳州",
              "valueLabelList": null
            }]
          }, {
            "value": "澳门",
            "label": "澳门",
            "valueLabelList": [{"value": "大堂区", "label": "大堂区", "valueLabelList": null}, {
              "value": "风顺",
              "label": "风顺",
              "valueLabelList": null
            }, {"value": "花地玛", "label": "花地玛", "valueLabelList": null}, {
              "value": "嘉模",
              "label": "嘉模",
              "valueLabelList": null
            }, {"value": "路氹城", "label": "路氹城", "valueLabelList": null}, {
              "value": "圣安多",
              "label": "圣安多",
              "valueLabelList": null
            }, {"value": "圣方济各", "label": "圣方济各", "valueLabelList": null}, {
              "value": "望德",
              "label": "望德",
              "valueLabelList": null
            }]
          }, {
            "value": "北京",
            "label": "北京",
            "valueLabelList": [{"value": "北京", "label": "北京", "valueLabelList": null}]
          }, {
            "value": "福建",
            "label": "福建",
            "valueLabelList": [{"value": "福州", "label": "福州", "valueLabelList": null}, {
              "value": "龙岩",
              "label": "龙岩",
              "valueLabelList": null
            }, {"value": "南平", "label": "南平", "valueLabelList": null}, {
              "value": "宁德",
              "label": "宁德",
              "valueLabelList": null
            }, {"value": "莆田", "label": "莆田", "valueLabelList": null}, {
              "value": "泉州",
              "label": "泉州",
              "valueLabelList": null
            }, {"value": "三明", "label": "三明", "valueLabelList": null}, {
              "value": "厦门",
              "label": "厦门",
              "valueLabelList": null
            }, {"value": "漳州", "label": "漳州", "valueLabelList": null}]
          }, {
            "value": "甘肃",
            "label": "甘肃",
            "valueLabelList": [{"value": "白银", "label": "白银", "valueLabelList": null}, {
              "value": "定西",
              "label": "定西",
              "valueLabelList": null
            }, {"value": "甘南", "label": "甘南", "valueLabelList": null}, {
              "value": "嘉峪关",
              "label": "嘉峪关",
              "valueLabelList": null
            }, {"value": "金昌", "label": "金昌", "valueLabelList": null}, {
              "value": "酒泉",
              "label": "酒泉",
              "valueLabelList": null
            }, {"value": "兰州", "label": "兰州", "valueLabelList": null}, {
              "value": "临夏",
              "label": "临夏",
              "valueLabelList": null
            }, {"value": "陇南", "label": "陇南", "valueLabelList": null}, {
              "value": "平凉",
              "label": "平凉",
              "valueLabelList": null
            }, {"value": "庆阳", "label": "庆阳", "valueLabelList": null}, {
              "value": "天水",
              "label": "天水",
              "valueLabelList": null
            }, {"value": "武威", "label": "武威", "valueLabelList": null}, {
              "value": "张掖",
              "label": "张掖",
              "valueLabelList": null
            }]
          }, {
            "value": "广东",
            "label": "广东",
            "valueLabelList": [{"value": "潮州", "label": "潮州", "valueLabelList": null}, {
              "value": "东莞",
              "label": "东莞",
              "valueLabelList": null
            }, {"value": "佛山", "label": "佛山", "valueLabelList": null}, {
              "value": "广州",
              "label": "广州",
              "valueLabelList": null
            }, {"value": "河源", "label": "河源", "valueLabelList": null}, {
              "value": "惠州",
              "label": "惠州",
              "valueLabelList": null
            }, {"value": "江门", "label": "江门", "valueLabelList": null}, {
              "value": "揭阳",
              "label": "揭阳",
              "valueLabelList": null
            }, {"value": "茂名", "label": "茂名", "valueLabelList": null}, {
              "value": "梅州",
              "label": "梅州",
              "valueLabelList": null
            }, {"value": "清远", "label": "清远", "valueLabelList": null}, {
              "value": "汕头",
              "label": "汕头",
              "valueLabelList": null
            }, {"value": "汕尾", "label": "汕尾", "valueLabelList": null}, {
              "value": "韶关",
              "label": "韶关",
              "valueLabelList": null
            }, {"value": "深圳", "label": "深圳", "valueLabelList": null}, {
              "value": "阳江",
              "label": "阳江",
              "valueLabelList": null
            }, {"value": "云浮", "label": "云浮", "valueLabelList": null}, {
              "value": "湛江",
              "label": "湛江",
              "valueLabelList": null
            }, {"value": "肇庆", "label": "肇庆", "valueLabelList": null}, {
              "value": "中山",
              "label": "中山",
              "valueLabelList": null
            }, {"value": "珠海", "label": "珠海", "valueLabelList": null}]
          }, {
            "value": "广西",
            "label": "广西",
            "valueLabelList": [{"value": "百色", "label": "百色", "valueLabelList": null}, {
              "value": "北海",
              "label": "北海",
              "valueLabelList": null
            }, {"value": "崇左", "label": "崇左", "valueLabelList": null}, {
              "value": "防城港",
              "label": "防城港",
              "valueLabelList": null
            }, {"value": "桂林", "label": "桂林", "valueLabelList": null}, {
              "value": "贵港",
              "label": "贵港",
              "valueLabelList": null
            }, {"value": "河池", "label": "河池", "valueLabelList": null}, {
              "value": "贺州",
              "label": "贺州",
              "valueLabelList": null
            }, {"value": "来宾", "label": "来宾", "valueLabelList": null}, {
              "value": "柳州",
              "label": "柳州",
              "valueLabelList": null
            }, {"value": "南宁", "label": "南宁", "valueLabelList": null}, {
              "value": "钦州",
              "label": "钦州",
              "valueLabelList": null
            }, {"value": "梧州", "label": "梧州", "valueLabelList": null}, {
              "value": "玉林",
              "label": "玉林",
              "valueLabelList": null
            }]
          }, {
            "value": "贵州",
            "label": "贵州",
            "valueLabelList": [{"value": "安顺", "label": "安顺", "valueLabelList": null}, {
              "value": "毕节",
              "label": "毕节",
              "valueLabelList": null
            }, {"value": "贵阳", "label": "贵阳", "valueLabelList": null}, {
              "value": "六盘水",
              "label": "六盘水",
              "valueLabelList": null
            }, {"value": "黔东南", "label": "黔东南", "valueLabelList": null}, {
              "value": "黔南",
              "label": "黔南",
              "valueLabelList": null
            }, {"value": "黔西南", "label": "黔西南", "valueLabelList": null}, {
              "value": "铜仁",
              "label": "铜仁",
              "valueLabelList": null
            }, {"value": "遵义", "label": "遵义", "valueLabelList": null}]
          }, {
            "value": "海南",
            "label": "海南",
            "valueLabelList": [{"value": "白沙", "label": "白沙", "valueLabelList": null}, {
              "value": "保亭",
              "label": "保亭",
              "valueLabelList": null
            }, {"value": "昌江", "label": "昌江", "valueLabelList": null}, {
              "value": "澄迈",
              "label": "澄迈",
              "valueLabelList": null
            }, {"value": "定安", "label": "定安", "valueLabelList": null}, {
              "value": "东方",
              "label": "东方",
              "valueLabelList": null
            }, {"value": "海口", "label": "海口", "valueLabelList": null}, {
              "value": "乐东",
              "label": "乐东",
              "valueLabelList": null
            }, {"value": "临高", "label": "临高", "valueLabelList": null}, {
              "value": "陵水",
              "label": "陵水",
              "valueLabelList": null
            }, {"value": "琼海", "label": "琼海", "valueLabelList": null}, {
              "value": "琼中",
              "label": "琼中",
              "valueLabelList": null
            }, {"value": "三沙", "label": "三沙", "valueLabelList": null}, {
              "value": "三亚",
              "label": "三亚",
              "valueLabelList": null
            }, {"value": "屯昌", "label": "屯昌", "valueLabelList": null}, {
              "value": "万宁",
              "label": "万宁",
              "valueLabelList": null
            }, {"value": "文昌", "label": "文昌", "valueLabelList": null}, {
              "value": "五指山",
              "label": "五指山",
              "valueLabelList": null
            }, {"value": "儋州", "label": "儋州", "valueLabelList": null}]
          }, {"value": "海外", "label": "海外", "valueLabelList": []}, {
            "value": "河北",
            "label": "河北",
            "valueLabelList": [{"value": "保定", "label": "保定", "valueLabelList": null}, {
              "value": "沧州",
              "label": "沧州",
              "valueLabelList": null
            }, {"value": "承德", "label": "承德", "valueLabelList": null}, {
              "value": "邯郸",
              "label": "邯郸",
              "valueLabelList": null
            }, {"value": "衡水", "label": "衡水", "valueLabelList": null}, {
              "value": "廊坊",
              "label": "廊坊",
              "valueLabelList": null
            }, {"value": "秦皇岛", "label": "秦皇岛", "valueLabelList": null}, {
              "value": "石家庄",
              "label": "石家庄",
              "valueLabelList": null
            }, {"value": "唐山", "label": "唐山", "valueLabelList": null}, {
              "value": "邢台",
              "label": "邢台",
              "valueLabelList": null
            }, {"value": "张家口", "label": "张家口", "valueLabelList": null}]
          }, {
            "value": "河南",
            "label": "河南",
            "valueLabelList": [{"value": "安阳", "label": "安阳", "valueLabelList": null}, {
              "value": "鹤壁",
              "label": "鹤壁",
              "valueLabelList": null
            }, {"value": "济源", "label": "济源", "valueLabelList": null}, {
              "value": "焦作",
              "label": "焦作",
              "valueLabelList": null
            }, {"value": "开封", "label": "开封", "valueLabelList": null}, {
              "value": "洛阳",
              "label": "洛阳",
              "valueLabelList": null
            }, {"value": "南阳", "label": "南阳", "valueLabelList": null}, {
              "value": "平顶山",
              "label": "平顶山",
              "valueLabelList": null
            }, {"value": "三门峡", "label": "三门峡", "valueLabelList": null}, {
              "value": "商丘",
              "label": "商丘",
              "valueLabelList": null
            }, {"value": "新乡", "label": "新乡", "valueLabelList": null}, {
              "value": "信阳",
              "label": "信阳",
              "valueLabelList": null
            }, {"value": "许昌", "label": "许昌", "valueLabelList": null}, {
              "value": "郑州",
              "label": "郑州",
              "valueLabelList": null
            }, {"value": "周口", "label": "周口", "valueLabelList": null}, {
              "value": "驻马店",
              "label": "驻马店",
              "valueLabelList": null
            }, {"value": "漯河", "label": "漯河", "valueLabelList": null}, {
              "value": "濮阳",
              "label": "濮阳",
              "valueLabelList": null
            }]
          }, {
            "value": "黑龙江",
            "label": "黑龙江",
            "valueLabelList": [{"value": "大庆", "label": "大庆", "valueLabelList": null}, {
              "value": "大兴安岭",
              "label": "大兴安岭",
              "valueLabelList": null
            }, {"value": "哈尔滨", "label": "哈尔滨", "valueLabelList": null}, {
              "value": "鹤岗",
              "label": "鹤岗",
              "valueLabelList": null
            }, {"value": "黑河", "label": "黑河", "valueLabelList": null}, {
              "value": "鸡西",
              "label": "鸡西",
              "valueLabelList": null
            }, {"value": "佳木斯", "label": "佳木斯", "valueLabelList": null}, {
              "value": "牡丹江",
              "label": "牡丹江",
              "valueLabelList": null
            }, {"value": "七台河", "label": "七台河", "valueLabelList": null}, {
              "value": "齐齐哈尔",
              "label": "齐齐哈尔",
              "valueLabelList": null
            }, {"value": "双鸭山", "label": "双鸭山", "valueLabelList": null}, {
              "value": "绥化",
              "label": "绥化",
              "valueLabelList": null
            }, {"value": "伊春", "label": "伊春", "valueLabelList": null}]
          }, {
            "value": "湖北",
            "label": "湖北",
            "valueLabelList": [{"value": "鄂州", "label": "鄂州", "valueLabelList": null}, {
              "value": "恩施",
              "label": "恩施",
              "valueLabelList": null
            }, {"value": "黄冈", "label": "黄冈", "valueLabelList": null}, {
              "value": "黄石",
              "label": "黄石",
              "valueLabelList": null
            }, {"value": "荆门", "label": "荆门", "valueLabelList": null}, {
              "value": "荆州",
              "label": "荆州",
              "valueLabelList": null
            }, {"value": "潜江", "label": "潜江", "valueLabelList": null}, {
              "value": "神农架",
              "label": "神农架",
              "valueLabelList": null
            }, {"value": "十堰", "label": "十堰", "valueLabelList": null}, {
              "value": "随州",
              "label": "随州",
              "valueLabelList": null
            }, {"value": "天门", "label": "天门", "valueLabelList": null}, {
              "value": "武汉",
              "label": "武汉",
              "valueLabelList": null
            }, {"value": "仙桃", "label": "仙桃", "valueLabelList": null}, {
              "value": "咸宁",
              "label": "咸宁",
              "valueLabelList": null
            }, {"value": "襄阳", "label": "襄阳", "valueLabelList": null}, {
              "value": "孝感",
              "label": "孝感",
              "valueLabelList": null
            }, {"value": "宜昌", "label": "宜昌", "valueLabelList": null}]
          }, {
            "value": "湖南",
            "label": "湖南",
            "valueLabelList": [{"value": "常德", "label": "常德", "valueLabelList": null}, {
              "value": "长沙",
              "label": "长沙",
              "valueLabelList": null
            }, {"value": "郴州", "label": "郴州", "valueLabelList": null}, {
              "value": "衡阳",
              "label": "衡阳",
              "valueLabelList": null
            }, {"value": "怀化", "label": "怀化", "valueLabelList": null}, {
              "value": "娄底",
              "label": "娄底",
              "valueLabelList": null
            }, {"value": "邵阳", "label": "邵阳", "valueLabelList": null}, {
              "value": "湘潭",
              "label": "湘潭",
              "valueLabelList": null
            }, {"value": "湘西", "label": "湘西", "valueLabelList": null}, {
              "value": "益阳",
              "label": "益阳",
              "valueLabelList": null
            }, {"value": "永州", "label": "永州", "valueLabelList": null}, {
              "value": "岳阳",
              "label": "岳阳",
              "valueLabelList": null
            }, {"value": "张家界", "label": "张家界", "valueLabelList": null}, {
              "value": "株洲",
              "label": "株洲",
              "valueLabelList": null
            }]
          }, {
            "value": "吉林",
            "label": "吉林",
            "valueLabelList": [{"value": "白城", "label": "白城", "valueLabelList": null}, {
              "value": "白山",
              "label": "白山",
              "valueLabelList": null
            }, {"value": "长春", "label": "长春", "valueLabelList": null}, {
              "value": "吉林",
              "label": "吉林",
              "valueLabelList": null
            }, {"value": "辽源", "label": "辽源", "valueLabelList": null}, {
              "value": "四平",
              "label": "四平",
              "valueLabelList": null
            }, {"value": "松原", "label": "松原", "valueLabelList": null}, {
              "value": "通化",
              "label": "通化",
              "valueLabelList": null
            }, {"value": "延边", "label": "延边", "valueLabelList": null}]
          }, {
            "value": "江苏",
            "label": "江苏",
            "valueLabelList": [{"value": "常州", "label": "常州", "valueLabelList": null}, {
              "value": "淮安",
              "label": "淮安",
              "valueLabelList": null
            }, {"value": "连云港", "label": "连云港", "valueLabelList": null}, {
              "value": "南京",
              "label": "南京",
              "valueLabelList": null
            }, {"value": "南通", "label": "南通", "valueLabelList": null}, {
              "value": "苏州",
              "label": "苏州",
              "valueLabelList": null
            }, {"value": "宿迁", "label": "宿迁", "valueLabelList": null}, {
              "value": "泰州",
              "label": "泰州",
              "valueLabelList": null
            }, {"value": "无锡", "label": "无锡", "valueLabelList": null}, {
              "value": "徐州",
              "label": "徐州",
              "valueLabelList": null
            }, {"value": "盐城", "label": "盐城", "valueLabelList": null}, {
              "value": "扬州",
              "label": "扬州",
              "valueLabelList": null
            }, {"value": "镇江", "label": "镇江", "valueLabelList": null}]
          }, {
            "value": "江西",
            "label": "江西",
            "valueLabelList": [{"value": "抚州", "label": "抚州", "valueLabelList": null}, {
              "value": "赣州",
              "label": "赣州",
              "valueLabelList": null
            }, {"value": "吉安", "label": "吉安", "valueLabelList": null}, {
              "value": "景德镇",
              "label": "景德镇",
              "valueLabelList": null
            }, {"value": "九江", "label": "九江", "valueLabelList": null}, {
              "value": "南昌",
              "label": "南昌",
              "valueLabelList": null
            }, {"value": "萍乡", "label": "萍乡", "valueLabelList": null}, {
              "value": "上饶",
              "label": "上饶",
              "valueLabelList": null
            }, {"value": "新余", "label": "新余", "valueLabelList": null}, {
              "value": "宜春",
              "label": "宜春",
              "valueLabelList": null
            }, {"value": "鹰潭", "label": "鹰潭", "valueLabelList": null}]
          }, {
            "value": "辽宁",
            "label": "辽宁",
            "valueLabelList": [{"value": "鞍山", "label": "鞍山", "valueLabelList": null}, {
              "value": "本溪",
              "label": "本溪",
              "valueLabelList": null
            }, {"value": "朝阳", "label": "朝阳", "valueLabelList": null}, {
              "value": "大连",
              "label": "大连",
              "valueLabelList": null
            }, {"value": "丹东", "label": "丹东", "valueLabelList": null}, {
              "value": "抚顺",
              "label": "抚顺",
              "valueLabelList": null
            }, {"value": "阜新", "label": "阜新", "valueLabelList": null}, {
              "value": "葫芦岛",
              "label": "葫芦岛",
              "valueLabelList": null
            }, {"value": "锦州", "label": "锦州", "valueLabelList": null}, {
              "value": "辽阳",
              "label": "辽阳",
              "valueLabelList": null
            }, {"value": "盘锦", "label": "盘锦", "valueLabelList": null}, {
              "value": "沈阳",
              "label": "沈阳",
              "valueLabelList": null
            }, {"value": "铁岭", "label": "铁岭", "valueLabelList": null}, {
              "value": "营口",
              "label": "营口",
              "valueLabelList": null
            }]
          }, {
            "value": "内蒙古",
            "label": "内蒙古",
            "valueLabelList": [{"value": "阿拉善", "label": "阿拉善", "valueLabelList": null}, {
              "value": "巴彦淖尔",
              "label": "巴彦淖尔",
              "valueLabelList": null
            }, {"value": "包头", "label": "包头", "valueLabelList": null}, {
              "value": "赤峰",
              "label": "赤峰",
              "valueLabelList": null
            }, {"value": "鄂尔多斯", "label": "鄂尔多斯", "valueLabelList": null}, {
              "value": "呼和浩特",
              "label": "呼和浩特",
              "valueLabelList": null
            }, {"value": "呼伦贝尔", "label": "呼伦贝尔", "valueLabelList": null}, {
              "value": "通辽",
              "label": "通辽",
              "valueLabelList": null
            }, {"value": "乌海", "label": "乌海", "valueLabelList": null}, {
              "value": "乌兰察布",
              "label": "乌兰察布",
              "valueLabelList": null
            }, {"value": "锡林郭勒", "label": "锡林郭勒", "valueLabelList": null}, {
              "value": "兴安",
              "label": "兴安",
              "valueLabelList": null
            }]
          }, {
            "value": "宁夏",
            "label": "宁夏",
            "valueLabelList": [{"value": "固原", "label": "固原", "valueLabelList": null}, {
              "value": "石嘴山",
              "label": "石嘴山",
              "valueLabelList": null
            }, {"value": "吴忠", "label": "吴忠", "valueLabelList": null}, {
              "value": "银川",
              "label": "银川",
              "valueLabelList": null
            }, {"value": "中卫", "label": "中卫", "valueLabelList": null}]
          }, {
            "value": "青海",
            "label": "青海",
            "valueLabelList": [{"value": "果洛", "label": "果洛", "valueLabelList": null}, {
              "value": "海北",
              "label": "海北",
              "valueLabelList": null
            }, {"value": "海东", "label": "海东", "valueLabelList": null}, {
              "value": "海南",
              "label": "海南",
              "valueLabelList": null
            }, {"value": "海西", "label": "海西", "valueLabelList": null}, {
              "value": "黄南",
              "label": "黄南",
              "valueLabelList": null
            }, {"value": "西宁", "label": "西宁", "valueLabelList": null}, {
              "value": "玉树",
              "label": "玉树",
              "valueLabelList": null
            }]
          }, {
            "value": "山东",
            "label": "山东",
            "valueLabelList": [{"value": "滨州", "label": "滨州", "valueLabelList": null}, {
              "value": "德州",
              "label": "德州",
              "valueLabelList": null
            }, {"value": "东营", "label": "东营", "valueLabelList": null}, {
              "value": "菏泽",
              "label": "菏泽",
              "valueLabelList": null
            }, {"value": "济南", "label": "济南", "valueLabelList": null}, {
              "value": "济宁",
              "label": "济宁",
              "valueLabelList": null
            }, {"value": "莱芜", "label": "莱芜", "valueLabelList": null}, {
              "value": "聊城",
              "label": "聊城",
              "valueLabelList": null
            }, {"value": "临沂", "label": "临沂", "valueLabelList": null}, {
              "value": "青岛",
              "label": "青岛",
              "valueLabelList": null
            }, {"value": "日照", "label": "日照", "valueLabelList": null}, {
              "value": "泰安",
              "label": "泰安",
              "valueLabelList": null
            }, {"value": "威海", "label": "威海", "valueLabelList": null}, {
              "value": "潍坊",
              "label": "潍坊",
              "valueLabelList": null
            }, {"value": "烟台", "label": "烟台", "valueLabelList": null}, {
              "value": "枣庄",
              "label": "枣庄",
              "valueLabelList": null
            }, {"value": "淄博", "label": "淄博", "valueLabelList": null}]
          }, {
            "value": "山西",
            "label": "山西",
            "valueLabelList": [{"value": "长治", "label": "长治", "valueLabelList": null}, {
              "value": "大同",
              "label": "大同",
              "valueLabelList": null
            }, {"value": "晋城", "label": "晋城", "valueLabelList": null}, {
              "value": "晋中",
              "label": "晋中",
              "valueLabelList": null
            }, {"value": "临汾", "label": "临汾", "valueLabelList": null}, {
              "value": "吕梁",
              "label": "吕梁",
              "valueLabelList": null
            }, {"value": "朔州", "label": "朔州", "valueLabelList": null}, {
              "value": "太原",
              "label": "太原",
              "valueLabelList": null
            }, {"value": "忻州", "label": "忻州", "valueLabelList": null}, {
              "value": "阳泉",
              "label": "阳泉",
              "valueLabelList": null
            }, {"value": "运城", "label": "运城", "valueLabelList": null}]
          }, {
            "value": "陕西",
            "label": "陕西",
            "valueLabelList": [{"value": "安康", "label": "安康", "valueLabelList": null}, {
              "value": "宝鸡",
              "label": "宝鸡",
              "valueLabelList": null
            }, {"value": "汉中", "label": "汉中", "valueLabelList": null}, {
              "value": "商洛",
              "label": "商洛",
              "valueLabelList": null
            }, {"value": "铜川", "label": "铜川", "valueLabelList": null}, {
              "value": "渭南",
              "label": "渭南",
              "valueLabelList": null
            }, {"value": "西安", "label": "西安", "valueLabelList": null}, {
              "value": "咸阳",
              "label": "咸阳",
              "valueLabelList": null
            }, {"value": "延安", "label": "延安", "valueLabelList": null}, {
              "value": "榆林",
              "label": "榆林",
              "valueLabelList": null
            }]
          }, {
            "value": "上海",
            "label": "上海",
            "valueLabelList": [{"value": "上海", "label": "上海", "valueLabelList": null}]
          }, {
            "value": "四川",
            "label": "四川",
            "valueLabelList": [{"value": "阿坝", "label": "阿坝", "valueLabelList": null}, {
              "value": "巴中",
              "label": "巴中",
              "valueLabelList": null
            }, {"value": "成都", "label": "成都", "valueLabelList": null}, {
              "value": "达州",
              "label": "达州",
              "valueLabelList": null
            }, {"value": "德阳", "label": "德阳", "valueLabelList": null}, {
              "value": "甘孜",
              "label": "甘孜",
              "valueLabelList": null
            }, {"value": "广安", "label": "广安", "valueLabelList": null}, {
              "value": "广元",
              "label": "广元",
              "valueLabelList": null
            }, {"value": "乐山", "label": "乐山", "valueLabelList": null}, {
              "value": "凉山",
              "label": "凉山",
              "valueLabelList": null
            }, {"value": "眉山", "label": "眉山", "valueLabelList": null}, {
              "value": "绵阳",
              "label": "绵阳",
              "valueLabelList": null
            }, {"value": "南充", "label": "南充", "valueLabelList": null}, {
              "value": "内江",
              "label": "内江",
              "valueLabelList": null
            }, {"value": "攀枝花", "label": "攀枝花", "valueLabelList": null}, {
              "value": "遂宁",
              "label": "遂宁",
              "valueLabelList": null
            }, {"value": "雅安", "label": "雅安", "valueLabelList": null}, {
              "value": "宜宾",
              "label": "宜宾",
              "valueLabelList": null
            }, {"value": "资阳", "label": "资阳", "valueLabelList": null}, {
              "value": "自贡",
              "label": "自贡",
              "valueLabelList": null
            }, {"value": "泸州", "label": "泸州", "valueLabelList": null}]
          }, {
            "value": "台湾",
            "label": "台湾",
            "valueLabelList": [{"value": "高雄", "label": "高雄", "valueLabelList": null}, {
              "value": "花莲",
              "label": "花莲",
              "valueLabelList": null
            }, {"value": "基隆", "label": "基隆", "valueLabelList": null}, {
              "value": "嘉义",
              "label": "嘉义",
              "valueLabelList": null
            }, {"value": "嘉义", "label": "嘉义", "valueLabelList": null}, {
              "value": "金门",
              "label": "金门",
              "valueLabelList": null
            }, {"value": "连江", "label": "连江", "valueLabelList": null}, {
              "value": "苗栗",
              "label": "苗栗",
              "valueLabelList": null
            }, {"value": "南投", "label": "南投", "valueLabelList": null}, {
              "value": "澎湖",
              "label": "澎湖",
              "valueLabelList": null
            }, {"value": "屏东", "label": "屏东", "valueLabelList": null}, {
              "value": "台北",
              "label": "台北",
              "valueLabelList": null
            }, {"value": "台东", "label": "台东", "valueLabelList": null}, {
              "value": "台南",
              "label": "台南",
              "valueLabelList": null
            }, {"value": "台中", "label": "台中", "valueLabelList": null}, {
              "value": "桃园",
              "label": "桃园",
              "valueLabelList": null
            }, {"value": "新北", "label": "新北", "valueLabelList": null}, {
              "value": "新竹市",
              "label": "新竹市",
              "valueLabelList": null
            }, {"value": "新竹县", "label": "新竹县", "valueLabelList": null}, {
              "value": "宜兰",
              "label": "宜兰",
              "valueLabelList": null
            }, {"value": "云林", "label": "云林", "valueLabelList": null}, {
              "value": "彰化",
              "label": "彰化",
              "valueLabelList": null
            }]
          }, {
            "value": "天津",
            "label": "天津",
            "valueLabelList": [{"value": "天津", "label": "天津", "valueLabelList": null}]
          }, {
            "value": "西藏",
            "label": "西藏",
            "valueLabelList": [{"value": "阿里", "label": "阿里", "valueLabelList": null}, {
              "value": "昌都",
              "label": "昌都",
              "valueLabelList": null
            }, {"value": "拉萨", "label": "拉萨", "valueLabelList": null}, {
              "value": "林芝",
              "label": "林芝",
              "valueLabelList": null
            }, {"value": "那曲", "label": "那曲", "valueLabelList": null}, {
              "value": "日喀则",
              "label": "日喀则",
              "valueLabelList": null
            }, {"value": "山南", "label": "山南", "valueLabelList": null}]
          }, {
            "value": "香港",
            "label": "香港",
            "valueLabelList": [{"value": "北区", "label": "北区", "valueLabelList": null}, {
              "value": "大埔",
              "label": "大埔",
              "valueLabelList": null
            }, {"value": "东区", "label": "东区", "valueLabelList": null}, {
              "value": "观塘",
              "label": "观塘",
              "valueLabelList": null
            }, {"value": "黄大仙", "label": "黄大仙", "valueLabelList": null}, {
              "value": "九龙城",
              "label": "九龙城",
              "valueLabelList": null
            }, {"value": "葵青", "label": "葵青", "valueLabelList": null}, {
              "value": "离岛",
              "label": "离岛",
              "valueLabelList": null
            }, {"value": "南区", "label": "南区", "valueLabelList": null}, {
              "value": "沙田",
              "label": "沙田",
              "valueLabelList": null
            }, {"value": "深水埗", "label": "深水埗", "valueLabelList": null}, {
              "value": "屯门",
              "label": "屯门",
              "valueLabelList": null
            }, {"value": "湾仔", "label": "湾仔", "valueLabelList": null}, {
              "value": "西贡",
              "label": "西贡",
              "valueLabelList": null
            }, {"value": "油尖旺", "label": "油尖旺", "valueLabelList": null}, {
              "value": "元朗",
              "label": "元朗",
              "valueLabelList": null
            }, {"value": "中西", "label": "中西", "valueLabelList": null}, {
              "value": "荃湾",
              "label": "荃湾",
              "valueLabelList": null
            }]
          }, {
            "value": "新疆",
            "label": "新疆",
            "valueLabelList": [{"value": "阿克苏", "label": "阿克苏", "valueLabelList": null}, {
              "value": "阿拉尔",
              "label": "阿拉尔",
              "valueLabelList": null
            }, {"value": "阿勒泰", "label": "阿勒泰", "valueLabelList": null}, {
              "value": "巴音郭楞",
              "label": "巴音郭楞",
              "valueLabelList": null
            }, {"value": "北屯", "label": "北屯", "valueLabelList": null}, {
              "value": "博尔塔拉",
              "label": "博尔塔拉",
              "valueLabelList": null
            }, {"value": "昌吉", "label": "昌吉", "valueLabelList": null}, {
              "value": "哈密",
              "label": "哈密",
              "valueLabelList": null
            }, {"value": "和田", "label": "和田", "valueLabelList": null}, {
              "value": "喀什",
              "label": "喀什",
              "valueLabelList": null
            }, {"value": "可克达拉", "label": "可克达拉", "valueLabelList": null}, {
              "value": "克拉玛依",
              "label": "克拉玛依",
              "valueLabelList": null
            }, {"value": "克孜勒苏", "label": "克孜勒苏", "valueLabelList": null}, {
              "value": "昆玉",
              "label": "昆玉",
              "valueLabelList": null
            }, {"value": "石河子", "label": "石河子", "valueLabelList": null}, {
              "value": "双河",
              "label": "双河",
              "valueLabelList": null
            }, {"value": "塔城", "label": "塔城", "valueLabelList": null}, {
              "value": "铁门关",
              "label": "铁门关",
              "valueLabelList": null
            }, {"value": "图木舒克", "label": "图木舒克", "valueLabelList": null}, {
              "value": "吐鲁番",
              "label": "吐鲁番",
              "valueLabelList": null
            }, {"value": "乌鲁木齐", "label": "乌鲁木齐", "valueLabelList": null}, {
              "value": "五家渠",
              "label": "五家渠",
              "valueLabelList": null
            }, {"value": "伊犁", "label": "伊犁", "valueLabelList": null}]
          }, {
            "value": "云南",
            "label": "云南",
            "valueLabelList": [{"value": "保山", "label": "保山", "valueLabelList": null}, {
              "value": "楚雄",
              "label": "楚雄",
              "valueLabelList": null
            }, {"value": "大理", "label": "大理", "valueLabelList": null}, {
              "value": "德宏",
              "label": "德宏",
              "valueLabelList": null
            }, {"value": "迪庆", "label": "迪庆", "valueLabelList": null}, {
              "value": "红河",
              "label": "红河",
              "valueLabelList": null
            }, {"value": "昆明", "label": "昆明", "valueLabelList": null}, {
              "value": "丽江",
              "label": "丽江",
              "valueLabelList": null
            }, {"value": "临沧", "label": "临沧", "valueLabelList": null}, {
              "value": "怒江",
              "label": "怒江",
              "valueLabelList": null
            }, {"value": "普洱", "label": "普洱", "valueLabelList": null}, {
              "value": "曲靖",
              "label": "曲靖",
              "valueLabelList": null
            }, {"value": "文山", "label": "文山", "valueLabelList": null}, {
              "value": "西双版纳",
              "label": "西双版纳",
              "valueLabelList": null
            }, {"value": "玉溪", "label": "玉溪", "valueLabelList": null}, {
              "value": "昭通",
              "label": "昭通",
              "valueLabelList": null
            }]
          }, {
            "value": "浙江",
            "label": "浙江",
            "valueLabelList": [{"value": "杭州", "label": "杭州", "valueLabelList": null}, {
              "value": "湖州",
              "label": "湖州",
              "valueLabelList": null
            }, {"value": "嘉兴", "label": "嘉兴", "valueLabelList": null}, {
              "value": "金华",
              "label": "金华",
              "valueLabelList": null
            }, {"value": "丽水", "label": "丽水", "valueLabelList": null}, {
              "value": "宁波",
              "label": "宁波",
              "valueLabelList": null
            }, {"value": "绍兴", "label": "绍兴", "valueLabelList": null}, {
              "value": "台州",
              "label": "台州",
              "valueLabelList": null
            }, {"value": "温州", "label": "温州", "valueLabelList": null}, {
              "value": "舟山",
              "label": "舟山",
              "valueLabelList": null
            }, {"value": "衢州", "label": "衢州", "valueLabelList": null}]
          }, {"value": "重庆", "label": "重庆", "valueLabelList": [{"value": "重庆", "label": "重庆", "valueLabelList": null}]}]
        }]
    }
  }
};
/* eslint-enable */
