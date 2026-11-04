var APP_DATA = {
  "scenes": [
    {
      "id": "0-art-room",
      "name": "art room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-cafeteria-1",
      "name": "cafeteria 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2689869218211456,
        "pitch": 0.24811511150533327,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 0.27893541573854286,
          "pitch": 0.03856328717461288,
          "rotation": 0,
          "target": "2-cafeteria-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cafeteria-2",
      "name": "cafeteria 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.8837286608273134,
        "pitch": 0.1497257404441541,
        "fov": 1.3968292576690586
      },
      "linkHotspots": [
        {
          "yaw": 2.6782246576152104,
          "pitch": 0.27786030373766835,
          "rotation": 7.0685834705770345,
          "target": "1-cafeteria-1"
        },
        {
          "yaw": -0.9524970468458562,
          "pitch": 0.08273454405186165,
          "rotation": 0,
          "target": "22-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-classroom",
      "name": "classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-dorm-bedroom-1",
      "name": "dorm bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.533932200404827,
        "pitch": 0.46094451787992163,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": -1.6212681171103274,
          "pitch": 0.502964866221717,
          "rotation": 0,
          "target": "6-dorm-halls-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dorm-halls-1",
      "name": "dorm halls 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.248581695657478,
        "pitch": 0.15985525608842366,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 1.227661142267042,
          "pitch": 0.4840127413931654,
          "rotation": 0.7853981633974483,
          "target": "23-outside-dorms-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dorm-halls-2",
      "name": "dorm halls 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.3188982320664895,
        "pitch": 0.33450816848169396,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 1.7868910452457412,
          "pitch": 0.6627868469631295,
          "rotation": 0.7853981633974483,
          "target": "4-dorm-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dorm-halls-3",
      "name": "dorm halls 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5208523953591104,
        "pitch": 0.18479971113731963,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-dorm-halls-4",
      "name": "dorm halls 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.6551072232239292,
        "pitch": 0.36733144181142485,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": -2.751810419678854,
          "pitch": 0.14498754815995696,
          "rotation": 0,
          "target": "5-dorm-halls-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dorm-halls-5",
      "name": "dorm halls 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0595753631490368,
        "pitch": 0.2349850770326043,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-dorm-laundry-room",
      "name": "dorm laundry room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.3439494235557383,
        "pitch": 0.537318760676186,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-dorm-room",
      "name": "dorm room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.404886990920687,
          "pitch": 0.47029999431918235,
          "rotation": 0,
          "target": "7-dorm-halls-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-empty-steam-classroom",
      "name": "empty STEAM classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-gym-1",
      "name": "gym 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.700599540090387,
        "pitch": 0.10146941025472778,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 0.28103522683816173,
          "pitch": 0.14943921033357022,
          "rotation": 0,
          "target": "14-gym-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-gym-2",
      "name": "gym 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.7028306641684914,
        "pitch": 0.11058121272122179,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 0.09865316247444333,
          "pitch": 0.302333729613391,
          "rotation": 0.7853981633974483,
          "target": "14-gym-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-hallway---4th-floor",
      "name": "hallway - 4th floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.296034692357491,
        "pitch": 0.11059552590982413,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 0.044645404919947396,
          "pitch": 0.07165015293004551,
          "rotation": 0,
          "target": "21-music-room"
        },
        {
          "yaw": -0.8659970701201587,
          "pitch": -0.04231393143905038,
          "rotation": 5.497787143782138,
          "target": "20-music-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-library---laptops-area",
      "name": "library - laptops area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10821645733077112,
          "pitch": 0.12825166717485814,
          "rotation": 0,
          "target": "17-library-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-library-1",
      "name": "library 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1323091400323264,
        "pitch": 0.052968100544834584,
        "fov": 1.3968292576690586
      },
      "linkHotspots": [
        {
          "yaw": 3.126704847447975,
          "pitch": 0.20243856937850424,
          "rotation": 0,
          "target": "16-library---laptops-area"
        },
        {
          "yaw": 0.01697292151207641,
          "pitch": 0.23443140158198617,
          "rotation": 0,
          "target": "18-library-2"
        },
        {
          "yaw": 0.5655054997828888,
          "pitch": 0.22762545367207565,
          "rotation": 0.7853981633974483,
          "target": "19-library-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-library-2",
      "name": "library 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.348562121453134,
        "pitch": 0.19343593328623676,
        "fov": 1.3968292576690586
      },
      "linkHotspots": [
        {
          "yaw": -0.11408687736939704,
          "pitch": 0.31017167625170394,
          "rotation": 0,
          "target": "17-library-1"
        },
        {
          "yaw": -0.6378966800345722,
          "pitch": 0.26420421943161543,
          "rotation": 5.497787143782138,
          "target": "19-library-3"
        },
        {
          "yaw": 2.287784981738757,
          "pitch": 0.15113554111842475,
          "rotation": 0.7853981633974483,
          "target": "20-music-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-library-3",
      "name": "library 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.888992467105851,
          "pitch": 0.26138144455006973,
          "rotation": 5.497787143782138,
          "target": "17-library-1"
        },
        {
          "yaw": -2.2041001764996686,
          "pitch": 0.0671494745495913,
          "rotation": 5.497787143782138,
          "target": "16-library---laptops-area"
        },
        {
          "yaw": 0.07288392395303589,
          "pitch": 0.3727424056539128,
          "rotation": 6.283185307179586,
          "target": "18-library-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-music-hall",
      "name": "music hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03856311704900506,
        "pitch": 0.33686069149659836,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": 2.1267178673736433,
          "pitch": 0.07059528616525235,
          "rotation": 6.283185307179586,
          "target": "15-hallway---4th-floor"
        },
        {
          "yaw": 1.2926620598654708,
          "pitch": 0.08110276660195126,
          "rotation": 0,
          "target": "18-library-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-music-room",
      "name": "music room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5437371900443857,
        "pitch": 0.39532783547836736,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [
        {
          "yaw": -2.3296632440669143,
          "pitch": 0.2252359531276671,
          "rotation": 0,
          "target": "15-hallway---4th-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-outside",
      "name": "outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.67349817179767,
          "pitch": 0.24068471373845668,
          "rotation": 0.7853981633974483,
          "target": "23-outside-dorms-area"
        },
        {
          "yaw": 0.07750349193916506,
          "pitch": 0.1746503080646189,
          "rotation": 0.7853981633974483,
          "target": "2-cafeteria-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-outside-dorms-area",
      "name": "outside dorms area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.16019512288511883,
        "pitch": 0.05818793300165481,
        "fov": 1.3968292576690586
      },
      "linkHotspots": [
        {
          "yaw": 0.43376381085723104,
          "pitch": 0.09370228942741043,
          "rotation": 4.71238898038469,
          "target": "22-outside"
        },
        {
          "yaw": -3.0576260218905453,
          "pitch": 0.4554458227550793,
          "rotation": 0,
          "target": "5-dorm-halls-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-steam-class---grade-7",
      "name": "STEAM class - grade 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.018124573001475852,
        "pitch": 0.5750223061503537,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -2.6091769042536335,
          "pitch": 1.2638260544701545,
          "title": "connie",
          "text": "Text"
        },
        {
          "yaw": 2.1040824203408555,
          "pitch": 0.6885195466157619,
          "title": "george",
          "text": "Text"
        }
      ]
    },
    {
      "id": "25-steam-class---grade-8",
      "name": "STEAM class - grade 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1676136837812141,
        "pitch": 0.4261627522787048,
        "fov": 1.4043814015595124
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -2.9068831483442175,
          "pitch": 0.17459426468342798,
          "title": "elisa",
          "text": "<br>"
        },
        {
          "yaw": -1.7365465431728282,
          "pitch": 0.4779745398285087,
          "title": "claire",
          "text": "Text"
        },
        {
          "yaw": -1.0055696483377474,
          "pitch": 0.492528324426976,
          "title": "maya",
          "text": "Text"
        },
        {
          "yaw": -2.696446065735433,
          "pitch": 0.7224410409572535,
          "title": "allen",
          "text": "Text"
        },
        {
          "yaw": -2.99395751685093,
          "pitch": 0.6802569769340963,
          "title": "pranav",
          "text": "Text"
        },
        {
          "yaw": 2.9902537654661954,
          "pitch": 0.5999242127760223,
          "title": "filipp",
          "text": "Text"
        },
        {
          "yaw": 2.594246073933702,
          "pitch": 0.6116781322192253,
          "title": "wasiq",
          "text": "Text"
        },
        {
          "yaw": -2.3084983000955646,
          "pitch": 0.30830722223929286,
          "title": "bunny",
          "text": "Text"
        },
        {
          "yaw": -2.104458941798283,
          "pitch": 0.32852236798236056,
          "title": "luna",
          "text": "Text"
        },
        {
          "yaw": -1.9525781100218431,
          "pitch": 0.3626918252365243,
          "title": "chloe",
          "text": "Text"
        },
        {
          "yaw": -2.561719294878099,
          "pitch": 0.22824427108524503,
          "title": "jason",
          "text": "Text"
        },
        {
          "yaw": 2.267005848536722,
          "pitch": 0.26566455083875695,
          "title": "florian",
          "text": "Text"
        },
        {
          "yaw": 1.5524727643555236,
          "pitch": 0.6121056884171718,
          "title": "phenix",
          "text": "Text"
        },
        {
          "yaw": 1.211188453950264,
          "pitch": 0.608894914220933,
          "title": "horace",
          "text": "Text"
        },
        {
          "yaw": 2.0277984331460495,
          "pitch": 0.3029517499495711,
          "title": "samuel",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
