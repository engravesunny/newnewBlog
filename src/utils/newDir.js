import { createDir } from '@/api/postApi.js'

const arr1 = [
    '0.webp', '1.webp', '10.webp', '11.webp',
    '12.webp', '13.webp', '14.webp', '15.webp',
    '16.webp', '17.webp', '18.webp', '19.webp',
    '2.webp', '20.webp', '21.webp', '22.webp',
    '23.webp', '24.webp', '25.webp', '26.webp',
    '27.webp', '28.webp', '29.webp', '3.webp',
    '30.webp', '31.webp', '32.webp', '33.webp',
    '34.webp', '35.webp', '36.webp', '37.webp',
    '38.webp', '39.webp', '4.webp', '40.webp',
    '41.webp', '42.webp', '43.webp', '44.webp',
    '45.webp', '46.webp', '47.webp', '48.webp',
    '49.webp', '5.webp', '50.webp', '51.webp',
    '52.webp', '53.webp', '54.webp', '55.webp',
    '56.webp', '57.webp', '58.webp', '59.webp',
    '6.webp', '7.webp', '8.webp', '9.webp'
]

const arr2 = [
    "10.webp",
    "100.webp",
    "101.webp",
    "102.webp",
    "103.webp",
    "104.webp",
    "105.webp",
    "106.webp",
    "107.webp",
    "108.webp",
    "109.webp",
    "11.webp",
    "110.webp",
    "111.webp",
    "112.webp",
    "113.webp",
    "114.webp",
    "115.webp",
    "116.webp",
    "117.webp",
    "118.webp",
    "119.webp",
    "12.webp",
    "120.webp",
    "121.webp",
    "122.webp",
    "123.webp",
    "124.webp",
    "125.webp",
    "126.webp",
    "127.webp",
    "128.webp",
    "129.webp",
    "13.webp",
    "130.webp",
    "131.webp",
    "132.webp",
    "133.webp",
    "134.webp",
    "135.webp",
    "136.webp",
    "137.webp",
    "138.webp",
    "139.webp",
    "14.webp",
    "140.webp",
    "141.webp",
    "142.webp",
    "143.webp",
    "144.webp",
    "145.webp",
    "146.webp",
    "147.webp",
    "148.webp",
    "149.webp",
    "15.webp",
    "150.webp",
    "151.webp",
    "152.webp",
    "153.webp",
    "154.webp",
    "155.webp",
    "156.webp",
    "157.webp",
    "158.webp",
    "159.webp",
    "16.webp",
    "160.webp",
    "161.webp",
    "162.webp",
    "163.webp",
    "164.webp",
    "165.webp",
    "166.webp",
    "167.webp",
    "168.webp",
    "169.webp",
    "17.webp",
    "170.webp",
    "171.webp",
    "172.webp",
    "173.webp",
    "174.webp",
    "175.webp",
    "176.webp",
    "177.webp",
    "178.webp",
    "179.webp",
    "18.webp",
    "180.webp",
    "181.webp",
    "182.webp",
    "183.webp",
    "184.webp",
    "185.webp",
    "186.webp",
    "187.webp",
    "188.webp",
    "189.webp",
    "19.webp",
    "190.webp",
    "191.webp",
    "192.webp",
    "193.webp",
    "194.webp",
    "195.webp",
    "196.webp",
    "197.webp",
    "198.webp",
    "199.webp",
    "20.webp",
    "200.webp",
    "201.webp",
    "202.webp",
    "203.webp",
    "204.webp",
    "205.webp",
    "206.webp",
    "207.webp",
    "208.webp",
    "209.webp",
    "21.webp",
    "210.webp",
    "211.webp",
    "212.webp",
    "213.webp",
    "214.webp",
    "215.webp",
    "216.webp",
    "217.webp",
    "218.webp",
    "219.webp",
    "22.webp",
    "220.webp",
    "221.webp",
    "222.webp",
    "223.webp",
    "224.webp",
    "225.webp",
    "226.webp",
    "227.webp",
    "228.webp",
    "229.webp",
    "23.webp",
    "230.webp",
    "231.webp",
    "232.webp",
    "233.webp",
    "234.webp",
    "235.webp",
    "236.webp",
    "237.webp",
    "238.webp",
    "239.webp",
    "24.webp",
    "240.webp",
    "241.webp",
    "242.webp",
    "243.webp",
    "244.webp",
    "245.webp",
    "246.webp",
    "247.webp",
    "248.webp",
    "249.webp",
    "25.webp",
    "250.webp",
    "251.webp",
    "252.webp",
    "253.webp",
    "254.webp",
    "255.webp",
    "256.webp",
    "257.webp",
    "258.webp",
    "259.webp",
    "26.webp",
    "260.webp",
    "261.webp",
    "262.webp",
    "263.webp",
    "264.webp",
    "265.webp",
    "266.webp",
    "267.webp",
    "268.webp",
    "269.webp",
    "27.webp",
    "270.webp",
    "271.webp",
    "272.webp",
    "273.webp",
    "274.webp",
    "275.webp",
    "276.webp",
    "277.webp",
    "278.webp",
    "279.webp",
    "28.webp",
    "280.webp",
    "281.webp",
    "282.webp",
    "283.webp",
    "284.webp",
    "285.webp",
    "286.webp",
    "287.webp",
    "288.webp",
    "289.webp",
    "29.webp",
    "290.webp",
    "291.webp",
    "292.webp",
    "293.webp",
    "294.webp",
    "295.webp",
    "296.webp",
    "297.webp",
    "298.webp",
    "299.webp",
    "3.webp",
    "30.webp",
    "300.webp",
    "301.webp",
    "302.webp",
    "303.webp",
    "304.webp",
    "305.webp",
    "306.webp",
    "307.webp",
    "308.webp",
    "309.webp",
    "31.webp",
    "310.webp",
    "311.webp",
    "312.webp",
    "313.webp",
    "314.webp",
    "315.webp",
    "316.webp",
    "317.webp",
    "318.webp",
    "319.webp",
    "32.webp",
    "320.webp",
    "321.webp",
    "322.webp",
    "323.webp",
    "324.webp",
    "325.webp",
    "326.webp",
    "327.webp",
    "328.webp",
    "329.webp",
    "33.webp",
    "330.webp",
    "331.webp",
    "332.webp",
    "333.webp",
    "334.webp",
    "335.webp",
    "336.webp",
    "337.webp",
    "338.webp",
    "339.webp",
    "34.webp",
    "340.webp",
    "341.webp",
    "342.webp",
    "343.webp",
    "344.webp",
    "345.webp",
    "346.webp",
    "347.webp",
    "348.webp",
    "349.webp",
    "35.webp",
    "350.webp",
    "351.webp",
    "352.webp",
    "353.webp",
    "354.webp",
    "355.webp",
    "356.webp",
    "357.webp",
    "358.webp",
    "359.webp",
    "36.webp",
    "360.webp",
    "361.webp",
    "362.webp",
    "363.webp",
    "364.webp",
    "365.webp",
    "366.webp",
    "367.webp",
    "368.webp",
    "369.webp",
    "37.webp",
    "370.webp",
    "371.webp",
    "372.webp",
    "373.webp",
    "374.webp",
    "375.webp",
    "376.webp",
    "377.webp",
    "378.webp",
    "379.webp",
    "38.webp",
    "380.webp",
    "381.webp",
    "382.webp",
    "383.webp",
    "384.webp",
    "385.webp",
    "386.webp",
    "387.webp",
    "388.webp",
    "389.webp",
    "39.webp",
    "390.webp",
    "391.webp",
    "392.webp",
    "393.webp",
    "394.webp",
    "395.webp",
    "396.webp",
    "397.webp",
    "398.webp",
    "399.webp",
    "4.webp",
    "40.webp",
    "400.webp",
    "401.webp",
    "402.webp",
    "403.webp",
    "404.webp",
    "405.webp",
    "406.webp",
    "407.webp",
    "408.webp",
    "409.webp",
    "41.webp",
    "410.webp",
    "411.webp",
    "412.webp",
    "413.webp",
    "414.webp",
    "415.webp",
    "416.webp",
    "417.webp",
    "418.webp",
    "419.webp",
    "42.webp",
    "420.webp",
    "421.webp",
    "422.webp",
    "423.webp",
    "424.webp",
    "425.webp",
    "426.webp",
    "427.webp",
    "428.webp",
    "429.webp",
    "43.webp",
    "430.webp",
    "431.webp",
    "432.webp",
    "433.webp",
    "434.webp",
    "435.webp",
    "436.webp",
    "437.webp",
    "438.webp",
    "439.webp",
    "44.webp",
    "440.webp",
    "441.webp",
    "442.webp",
    "443.webp",
    "444.webp",
    "445.webp",
    "446.webp",
    "447.webp",
    "448.webp",
    "449.webp",
    "45.webp",
    "450.webp",
    "451.webp",
    "452.webp",
    "453.webp",
    "454.webp",
    "455.webp",
    "456.webp",
    "457.webp",
    "458.webp",
    "459.webp",
    "46.webp",
    "460.webp",
    "461.webp",
    "462.webp",
    "463.webp",
    "464.webp",
    "465.webp",
    "466.webp",
    "467.webp",
    "468.webp",
    "469.webp",
    "47.webp",
    "470.webp",
    "471.webp",
    "472.webp",
    "473.webp",
    "474.webp",
    "475.webp",
    "476.webp",
    "477.webp",
    "478.webp",
    "479.webp",
    "48.webp",
    "480.webp",
    "481.webp",
    "482.webp",
    "483.webp",
    "484.webp",
    "485.webp",
    "486.webp",
    "487.webp",
    "488.webp",
    "489.webp",
    "49.webp",
    "490.webp",
    "491.webp",
    "492.webp",
    "493.webp",
    "494.webp",
    "495.webp",
    "496.webp",
    "497.webp",
    "498.webp",
    "499.webp",
    "5.webp",
    "50.webp",
    "500.webp",
    "501.webp",
    "502.webp",
    "503.webp",
    "504.webp",
    "505.webp",
    "506.webp",
    "507.webp",
    "508.webp",
    "509.webp",
    "51.webp",
    "510.webp",
    "511.webp",
    "512.webp",
    "513.webp",
    "514.webp",
    "515.webp",
    "516.webp",
    "517.webp",
    "518.webp",
    "519.webp",
    "52.webp",
    "520.webp",
    "521.webp",
    "522.webp",
    "523.webp",
    "524.webp",
    "525.webp",
    "526.webp",
    "527.webp",
    "528.webp",
    "529.webp",
    "53.webp",
    "530.webp",
    "531.webp",
    "532.webp",
    "533.webp",
    "534.webp",
    "535.webp",
    "536.webp",
    "537.webp",
    "538.webp",
    "539.webp",
    "54.webp",
    "540.webp",
    "541.webp",
    "542.webp",
    "543.webp",
    "544.webp",
    "545.webp",
    "546.webp",
    "547.webp",
    "548.webp",
    "549.webp",
    "55.webp",
    "550.webp",
    "551.webp",
    "552.webp",
    "553.webp",
    "554.webp",
    "555.webp",
    "556.webp",
    "557.webp",
    "558.webp",
    "559.webp",
    "56.webp",
    "560.webp",
    "561.webp",
    "562.webp",
    "563.webp",
    "564.webp",
    "565.webp",
    "566.webp",
    "567.webp",
    "568.webp",
    "569.webp",
    "57.webp",
    "570.webp",
    "571.webp",
    "572.webp",
    "573.webp",
    "574.webp",
    "575.webp",
    "576.webp",
    "577.webp",
    "578.webp",
    "579.webp",
    "58.webp",
    "580.webp",
    "581.webp",
    "582.webp",
    "583.webp",
    "584.webp",
    "585.webp",
    "586.webp",
    "587.webp",
    "588.webp",
    "589.webp",
    "59.webp",
    "590.webp",
    "591.webp",
    "592.webp",
    "593.webp",
    "594.webp",
    "595.webp",
    "596.webp",
    "597.webp",
    "598.webp",
    "599.webp",
    "6.webp",
    "60.webp",
    "600.webp",
    "601.webp",
    "602.webp",
    "603.webp",
    "604.webp",
    "605.webp",
    "606.webp",
    "607.webp",
    "608.webp",
    "609.webp",
    "61.webp",
    "610.webp",
    "611.webp",
    "612.webp",
    "613.webp",
    "614.webp",
    "615.webp",
    "616.webp",
    "617.webp",
    "618.webp",
    "619.webp",
    "62.webp",
    "620.webp",
    "621.webp",
    "622.webp",
    "623.webp",
    "624.webp",
    "625.webp",
    "626.webp",
    "627.webp",
    "628.webp",
    "629.webp",
    "63.webp",
    "630.webp",
    "631.webp",
    "632.webp",
    "633.webp",
    "634.webp",
    "635.webp",
    "636.webp",
    "637.webp",
    "638.webp",
    "639.webp",
    "64.webp",
    "640.webp",
    "641.webp",
    "642.webp",
    "643.webp",
    "644.webp",
    "645.webp",
    "646.webp",
    "647.webp",
    "648.webp",
    "649.webp",
    "65.webp",
    "650.webp",
    "651.webp",
    "652.webp",
    "653.webp",
    "654.webp",
    "655.webp",
    "656.webp",
    "657.webp",
    "658.webp",
    "659.webp",
    "66.webp",
    "660.webp",
    "661.webp",
    "662.webp",
    "663.webp",
    "664.webp",
    "665.webp",
    "666.webp",
    "667.webp",
    "668.webp",
    "669.webp",
    "67.webp",
    "670.webp",
    "671.webp",
    "672.webp",
    "673.webp",
    "674.webp",
    "675.webp",
    "676.webp",
    "677.webp",
    "678.webp",
    "679.webp",
    "68.webp",
    "680.webp",
    "681.webp",
    "682.webp",
    "683.webp",
    "684.webp",
    "685.webp",
    "686.webp",
    "687.webp",
    "688.webp",
    "689.webp",
    "69.webp",
    "690.webp",
    "691.webp",
    "692.webp",
    "693.webp",
    "694.webp",
    "695.webp",
    "696.webp",
    "697.webp",
    "698.webp",
    "699.webp",
    "7.webp",
    "70.webp",
    "700.webp",
    "701.webp",
    "702.webp",
    "703.webp",
    "704.webp",
    "705.webp",
    "706.webp",
    "707.webp",
    "708.webp",
    "709.webp",
    "71.webp",
    "710.webp",
    "711.webp",
    "712.webp",
    "713.webp",
    "714.webp",
    "715.webp",
    "716.webp",
    "717.webp",
    "718.webp",
    "719.webp",
    "72.webp",
    "720.webp",
    "721.webp",
    "722.webp",
    "723.webp",
    "724.webp",
    "725.webp",
    "726.webp",
    "727.webp",
    "728.webp",
    "729.webp",
    "73.webp",
    "730.webp",
    "731.webp",
    "732.webp",
    "733.webp",
    "734.webp",
    "735.webp",
    "736.webp",
    "737.webp",
    "738.webp",
    "739.webp",
    "74.webp",
    "740.webp",
    "741.webp",
    "742.webp",
    "743.webp",
    "744.webp",
    "745.webp",
    "746.webp",
    "747.webp",
    "748.webp",
    "749.webp",
    "75.webp",
    "750.webp",
    "751.webp",
    "752.webp",
    "753.webp",
    "754.webp",
    "755.webp",
    "756.webp",
    "757.webp",
    "758.webp",
    "759.webp",
    "76.webp",
    "760.webp",
    "761.webp",
    "762.webp",
    "763.webp",
    "764.webp",
    "765.webp",
    "766.webp",
    "767.webp",
    "768.webp",
    "769.webp",
    "77.webp",
    "770.webp",
    "771.webp",
    "772.webp",
    "773.webp",
    "774.webp",
    "775.webp",
    "776.webp",
    "777.webp",
    "778.webp",
    "779.webp",
    "78.webp",
    "780.webp",
    "781.webp",
    "782.webp",
    "783.webp",
    "784.webp",
    "785.webp",
    "786.webp",
    "787.webp",
    "788.webp",
    "789.webp",
    "79.webp",
    "790.webp",
    "791.webp",
    "792.webp",
    "793.webp",
    "794.webp",
    "795.webp",
    "796.webp",
    "797.webp",
    "798.webp",
    "799.webp",
    "8.webp",
    "80.webp",
    "800.webp",
    "801.webp",
    "802.webp",
    "81.webp",
    "82.webp",
    "83.webp",
    "84.webp",
    "85.webp",
    "86.webp",
    "87.webp",
    "88.webp",
    "89.webp",
    "9.webp",
    "90.webp",
    "91.webp",
    "92.webp",
    "93.webp",
    "94.webp",
    "95.webp",
    "96.webp",
    "97.webp",
    "98.webp",
    "99.webp",
]

const arr3 = [
    '10.webp', '11.webp', '12.webp', '13.webp', '14.webp',
    '15.webp', '16.webp', '17.webp', '18.webp', '19.webp',
    '2.webp', '20.webp', '21.webp', '22.webp', '23.webp',
    '24.webp', '25.webp', '26.webp', '27.webp', '28.webp',
    '29.webp', '3.webp', '30.webp', '31.webp', '32.webp',
    '33.webp', '34.webp', '35.webp', '36.webp', '37.webp',
    '38.webp', '39.webp', '4.webp', '40.webp', '41.webp',
    '42.webp', '43.webp', '44.webp', '45.webp', '46.webp',
    '47.webp', '48.webp', '49.webp', '5.webp', '50.webp',
    '51.webp', '52.webp', '53.webp', '54.webp', '55.webp',
    '56.webp', '57.webp', '58.webp', '59.webp', '6.webp',
    '60.webp', '61.webp', '62.webp', '63.webp', '64.webp',
    '65.webp', '66.webp', '67.webp', '68.webp', '69.webp',
    '7.webp', '70.webp', '71.webp', '72.webp', '73.webp',
    '74.webp', '75.webp', '76.webp', '77.webp', '78.webp',
    '79.webp', '8.webp', '80.webp', '81.webp', '82.webp',
    '83.webp', '84.webp', '85.webp', '86.webp', '87.webp',
    '88.webp', '89.webp', '9.webp', '90.webp', '91.webp',
    '92.webp', '93.webp', '94.webp'
]

const arr4 = [
    "1.webp",
    "10.webp",
    "100.webp",
    "101.webp",
    "102.webp",
    "103.webp",
    "104.webp",
    "105.webp",
    "106.webp",
    "107.webp",
    "108.webp",
    "109.webp",
    "11.webp",
    "110.webp",
    "111.webp",
    "112.webp",
    "113.webp",
    "114.webp",
    "115.webp",
    "116.webp",
    "117.webp",
    "118.webp",
    "119.webp",
    "12.webp",
    "120.webp",
    "121.webp",
    "122.webp",
    "123.webp",
    "124.webp",
    "125.webp",
    "126.webp",
    "127.webp",
    "128.webp",
    "129.webp",
    "13.webp",
    "130.webp",
    "131.webp",
    "132.webp",
    "133.webp",
    "134.webp",
    "135.webp",
    "136.webp",
    "137.webp",
    "138.webp",
    "139.webp",
    "14.webp",
    "140.webp",
    "141.webp",
    "142.webp",
    "143.webp",
    "144.webp",
    "145.webp",
    "146.webp",
    "147.webp",
    "148.webp",
    "149.webp",
    "15.webp",
    "150.webp",
    "151.webp",
    "152.webp",
    "153.webp",
    "154.webp",
    "155.webp",
    "156.webp",
    "157.webp",
    "158.webp",
    "159.webp",
    "16.webp",
    "160.webp",
    "161.webp",
    "162.webp",
    "163.webp",
    "164.webp",
    "165.webp",
    "166.webp",
    "167.webp",
    "168.webp",
    "169.webp",
    "17.webp",
    "170.webp",
    "171.webp",
    "172.webp",
    "173.webp",
    "174.webp",
    "175.webp",
    "176.webp",
    "177.webp",
    "178.webp",
    "179.webp",
    "18.webp",
    "180.webp",
    "181.webp",
    "182.webp",
    "183.webp",
    "184.webp",
    "19.webp",
    "2.webp",
    "20.webp",
    "21.webp",
    "22.webp",
    "23.webp",
    "24.webp",
    "25.webp",
    "26.webp",
    "27.webp",
    "28.webp",
    "29.webp",
    "3.webp",
    "30.webp",
    "31.webp",
    "32.webp",
    "33.webp",
    "34.webp",
    "35.webp",
    "36.webp",
    "37.webp",
    "38.webp",
    "39.webp",
    "4.webp",
    "40.webp",
    "41.webp",
    "42.webp",
    "43.webp",
    "44.webp",
    "45.webp",
    "46.webp",
    "47.webp",
    "48.webp",
    "49.webp",
    "5.webp",
    "50.webp",
    "51.webp",
    "52.webp",
    "53.webp",
    "54.webp",
    "55.webp",
    "56.webp",
    "57.webp",
    "58.webp",
    "59.webp",
    "6.webp",
    "60.webp",
    "61.webp",
    "62.webp",
    "63.webp",
    "64.webp",
    "65.webp",
    "66.webp",
    "67.webp",
    "68.webp",
    "69.webp",
    "7.webp",
    "70.webp",
    "71.webp",
    "72.webp",
    "73.webp",
    "74.webp",
    "75.webp",
    "76.webp",
    "77.webp",
    "78.webp",
    "79.webp",
    "8.webp",
    "80.webp",
    "81.webp",
    "82.webp",
    "83.webp",
    "84.webp",
    "85.webp",
    "86.webp",
    "87.webp",
    "88.webp",
    "89.webp",
    "9.webp",
    "90.webp",
    "91.webp",
    "92.webp",
    "93.webp",
    "94.webp",
    "95.webp",
    "96.webp",
    "97.webp",
    "98.webp",
    "99.webp",
]
// 壁纸页新建
export const newWallpaper = () => {
    arr1.map(item => {
        createDir({
            dir_path: `./images/壁纸/${item}`
        }).then(res => {
            console.log(res.data.data);
        })
    })
}
// 美图页新建
export const beautiful = () => {
    arr2.map(item => {
        createDir({
            dir_path: `./images/美图/${item}`
        }).then(res => {
            console.log(res.data);
        })
    })
}
// 日常页新建
export const daily = () => {
    arr3.map(item => {
        createDir({
            dir_path: `./images/日常/${item}`
        }).then(res => {
            console.log(res.data);
        })
    })
}
// 涩涩页新建
export const sese = () => {
    arr4.map(item => {
        createDir({
            dir_path: `./images/涩涩/${item}`
        }).then(res => {
            console.log(res.data);
        })
    })
}