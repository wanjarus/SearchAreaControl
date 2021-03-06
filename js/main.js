var data = [
  {
    "code": null,
    "group": null,
    "name": "Economy car",
    "attributes": {
      "data-id": "1"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Microcar",
        "attributes": {
          "data-id": "11"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Hatchbacks",
        "attributes": {
          "data-id": "12"
        },
        "children": [
          {
            "code": null,
            "group": null,
            "name": "Ultracompact car",
            "attributes": {
              "data-id": "121"
            },
            "children": null
          },
          {
            "code": null,
            "group": null,
            "name": "City car",
            "attributes": {
              "data-id": "122"
            },
            "children": null
          },
          {
            "code": null,
            "group": null,
            "name": "Supermini/subcompact car",
            "attributes": {
              "data-id": "123"
            },
            "children": null
          }
        ]
      }      
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Family car",
    "attributes": {
      "data-id": "2"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Small family car/compact car",
        "attributes": {
          "data-id": "21"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "	Large family / mid-size",
        "attributes": {
          "data-id": "22"
        },
        "children": null
      }
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Saloons / sedans",
    "attributes": {
      "data-id": "3"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Large family / mid-size",
        "attributes": {
          "data-id": "31"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Full size / large",
        "attributes": {
          "data-id": "32"
        },
        "children": null
      },
{
        "code": null,
        "group": null,
        "name": "Crossover SUV",
        "attributes": {
          "data-id": "33"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Minivans / MPVs",
        "attributes": {
          "data-id": "34"
        },
        "children": null
      }
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Luxury vehicle",
    "attributes": {
      "data-id": "4"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Compact executive",
        "attributes": {
          "data-id": "41"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Executive / mid-luxury",
        "attributes": {
          "data-id": "42"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Full-size luxury / Grand saloon",
        "attributes": {
          "data-id": "43"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Estate cars / station wagons",
        "attributes": {
          "data-id": "44"
        },
        "children": null
      }
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Sports cars",
    "attributes": {
      "data-id": "5"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Hot hatch",
        "attributes": {
          "data-id": "51"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Sports saloon / sports sedan",
        "attributes": {
          "data-id": "52"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Sports car",
        "attributes": {
          "data-id": "53"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Grand tourer",
        "attributes": {
          "data-id": "54"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Supercar",
        "attributes": {
          "data-id": "55"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Muscle car",
        "attributes": {
          "data-id": "56"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Pony car",
        "attributes": {
          "data-id": "57"
        },
        "children": null
      },
      {
        "code": null,
        "group": null,
        "name": "Convertible",
        "attributes": {
          "data-id": "58"
        },
        "children": null
      }
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Off-roaders",
    "attributes": {
      "data-id": "6"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Sport utility vehicle",
        "attributes": {
          "data-id": "61"
        },
        "children": null
      }
    ]
  },
  {
    "code": null,
    "group": null,
    "name": "Commercial vehicle",
    "attributes": {
      "data-id": "7"
    },
    "children": [
      {
        "code": null,
        "group": null,
        "name": "Van",
        "attributes": {
          "data-id": "71"
        },
        "children": null
      }
    ]
  }
];

$(document).ready(function() {
  
    $('#myButton').searchAreaControl({        
        data: data,
        mainButton: {
            defaultText: 'Cars'
        }
    });
      
    var btn2 = $('#myButton2');
    btn2.searchAreaControl({        
        data: data,
        mainButton: {
            defaultText: 'Cars'
        }
    });
    btn2.searchAreaControl('setSelectedNodes', false, [55]);
        
    $('#myButton3').searchAreaControl({        
        data: data,
        mainButton: {
            defaultText: 'Cars'
        }
    });

    $('#myButton4').searchAreaControl({        
        data: data,
        mainButton: {
            defaultText: 'Cars'
        }
    });

    $('#myButton5').searchAreaControl({        
        data: data,
        mainButton: {
            defaultText: 'Cars'
        }
    });
});

$(document).on('click', '#selectPony', function() {      
    $('#myButton3').searchAreaControl('setSelectedNodes',false,[57]);
});

$(document).on('click', '#getSelectedByAttribute', function() {
    var selected = $('#myButton4').searchAreaControl('getSelectedByAttribute','data-id');
    var result = (selected.length > 0) ? '[' + selected.join(',') + ']' : '[]';
    $('#getSelectedByAttribute_result').html(result);
});

$(document).on('click', '#setDisabled', function() {      
    $('#myButton5').searchAreaControl('setDisabled',true);
});

$(document).on('click', '#setEnabled', function() {      
    $('#myButton5').searchAreaControl('setDisabled',false);
});

// $(document).on('click', '#getSelected', function() {
//     var selected = $('#target').searchAreaControl('getSelectedNodes');
//     console.log(selected);
// });



// $(document).on('click', '#setDisabled', function() {  
//     var btn = $('#target');
//     var isDisabled = btn.searchAreaControl('getDisabled');
//     btn.searchAreaControl('setDisabled',!isDisabled);
// });

// $(document).on('click', '#destroy', function() {  
//     var btn = $('#target');    
//     btn.searchAreaControl('destroy');
// });

// $(document).on('click', '#setSelected', function() {  
//     var btn = $('#target');    
//     btn.searchAreaControl('setSelectedNodes',false,[1,2]);
// });

// $(document).on('click', '#clearSelection', function() {  
//     var btn = $('#target');    
//     btn.searchAreaControl('clearSelection');
// });