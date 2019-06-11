import { Component, OnInit } from '@angular/core';
import {fotosArray} from './fotosArray'


@Component({
  selector: 'app-fotos-fotos',
  templateUrl: './fotos-fotos.component.html',
  styleUrls: ['./fotos-fotos.component.css']
})
export class FotosFotosComponent implements OnInit {
  fotosArray=[   
    "https://i.ibb.co/tYBLTsh/IMG-20190610-WA0062.jpg",
    "https://i.ibb.co/S6bvR15/IMG-20190610-WA0063.jpg",
    "https://i.ibb.co/sP54HXp/IMG-20190610-WA0064.jpg",
    "https://i.ibb.co/QX4bWk8/IMG-20190610-WA0065.jpg",
    "https://i.ibb.co/MN7fq7f/IMG-20190610-WA0066.jpg",
    "https://i.ibb.co/hYqbG9M/IMG-20190610-WA0067.jpg",
    "https://i.ibb.co/SJPVwP8/IMG-20190610-WA0068.jpg",
    "https://i.ibb.co/vPP5M5D/IMG-20190610-WA0069.jpg",
    "https://i.ibb.co/SBzkjtB/IMG-20190610-WA0070.jpg",
    "https://i.ibb.co/2t2PMcT/IMG-20190610-WA0071.jpg",
    "https://i.ibb.co/z8dKwMY/IMG-20190610-WA0072.jpg",
    "https://i.ibb.co/x7gKrMy/IMG-20190610-WA0073.jpg",
    "https://i.ibb.co/1KQ5BPC/IMG-20190610-WA0074.jpg",
    "https://i.ibb.co/BB0NfMm/IMG-20190610-WA0075.jpg",
    "https://i.ibb.co/cy6F7JW/IMG-20190610-WA0076.jpg",
    "https://i.ibb.co/xSbkhxW/IMG-20190610-WA0077.jpg",
    "https://i.ibb.co/M2HMYn6/IMG-20190610-WA0078.jpg",
    "https://i.ibb.co/thQDWkD/IMG-20190610-WA0079.jpg",
    "https://i.ibb.co/8NDNXMv/IMG-20190610-WA0080.jpg",
    "https://i.ibb.co/JcB4Zhd/IMG-20190610-WA0081.jpg",
    "https://i.ibb.co/qg5mWMT/IMG-20190610-WA0082.jpg",
    "https://i.ibb.co/L8tkchg/IMG-20190610-WA0083.jpg",
    "https://i.ibb.co/F582Rkh/IMG-20190610-WA0084.jpg",
    "https://i.ibb.co/9WCfbNr/IMG-20190610-WA0085.jpg",
    "https://i.ibb.co/55pgMk3/IMG-20190610-WA0086.jpg",
    "https://i.ibb.co/GMsF6wZ/IMG-20190610-WA0087.jpg",
    "https://i.ibb.co/LNgzMm9/IMG-20190610-WA0088.jpg",
    "https://i.ibb.co/VqmMstW/IMG-20190610-WA0089.jpg",
    "https://i.ibb.co/V3qPdvJ/IMG-20190610-WA0090.jpg",
    "https://i.ibb.co/4ZYH3Sf/IMG-20190610-WA0091.jpg",
    "https://i.ibb.co/n1F7q3Y/IMG-20190610-WA0092.jpg",
    "https://i.ibb.co/W2114XT/IMG-20190610-WA0093.jpg",
    "https://i.ibb.co/kgFVdtK/IMG-20190610-WA0094.jpg",
    "https://i.ibb.co/DMqc83p/IMG-20190610-WA0095.jpg",
    "https://i.ibb.co/6JD3QyT/IMG-20190610-WA0096.jpg",
    "https://i.ibb.co/bQrtLDS/IMG-20190610-WA0097.jpg",
    "https://i.ibb.co/HqzxDFn/IMG-20190610-WA0098.jpg",
    "https://i.ibb.co/KhnKGpX/IMG-20190610-WA0099.jpg",
    "https://i.ibb.co/MB6WPBj/IMG-20190610-WA0100.jpg",
    "https://i.ibb.co/JKvtvtb/IMG-20190610-WA0101.jpg",
    "https://i.ibb.co/9bkbw68/IMG-20190610-WA0102.jpg",
    "https://i.ibb.co/L1J75yH/IMG-20190610-WA0103.jpg",
    "https://i.ibb.co/j3k2VVS/IMG-20190610-WA0104.jpg",
    "https://i.ibb.co/F86zJM5/IMG-20190610-WA0105.jpg",
    "https://i.ibb.co/5hpDhcK/IMG-20190610-WA0106.jpg",
    "https://i.ibb.co/NTMjnFM/IMG-20190610-WA0107.jpg",
    "https://i.ibb.co/m8p9JQp/IMG-20190610-WA0108.jpg",
    "https://i.ibb.co/mJvy7pN/IMG-20190610-WA0109.jpg",
    "https://i.ibb.co/Ss00ZP7/IMG-20190610-WA0110.jpg",
    "https://i.ibb.co/ZYq7zTW/IMG-20190610-WA0111.jpg",
    "https://i.ibb.co/z5Xf214/IMG-20190610-WA0112.jpg",
    "https://i.ibb.co/zXHjZyf/IMG-20190610-WA0113.jpg",
    "https://i.ibb.co/k4jb1TW/IMG-20190610-WA0114.jpg",
    "https://i.ibb.co/k9vJrhJ/IMG-20190610-WA0115.jpg",
    "https://i.ibb.co/pJKq5kF/IMG-20190610-WA0116.jpg",
    "https://i.ibb.co/hfD3mGz/IMG-20190610-WA0117.jpg",
    "https://i.ibb.co/QXmjTzr/IMG-20190610-WA0118.jpg",
    "https://i.ibb.co/CJhhsRP/IMG-20190610-WA0119.jpg",
    "https://i.ibb.co/4YFkPff/IMG-20190610-WA0120.jpg",
    "https://i.ibb.co/zngmF0Q/IMG-20190610-WA0121.jpg",
    "https://i.ibb.co/vhX41kK/IMG-20190610-WA0122.jpg",
    "https://i.ibb.co/Krn0bzB/IMG-20190610-WA0123.jpg",
    "https://i.ibb.co/QNryLc9/IMG-20190610-WA0124.jpg",
    "https://i.ibb.co/YDbK33V/IMG-20190610-WA0125.jpg",
    "https://i.ibb.co/nQkNpLB/IMG-20190610-WA0126.jpg",
    "https://i.ibb.co/qCN9j33/IMG-20190610-WA0127.jpg",
    "https://i.ibb.co/hYNgh49/IMG-20190610-WA0128.jpg",
    "https://i.ibb.co/8Ngwgbk/IMG-20190610-WA0129.jpg",
    "https://i.ibb.co/9GCm711/IMG-20190610-WA0130.jpg",
    "https://i.ibb.co/z8PYyM5/IMG-20190610-WA0131.jpg",
    "https://i.ibb.co/Z2gBMHM/IMG-20190610-WA0132.jpg",
    "https://i.ibb.co/Gk5G0jX/IMG-20190610-WA0133.jpg",
    "https://i.ibb.co/28vHSXy/IMG-20190610-WA0134.jpg",
    "https://i.ibb.co/z2z2DtK/IMG-20190610-WA0135.jpg"
    ]
  constructor() { }

  ngOnInit() {
  }

}
