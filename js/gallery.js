
gallery = [
    {
        'seq': '0',
        'nick':'insignia',
        'file_name':'2000.jpg',
        'caption':'Walt Disney!'
    },        
    {
        'seq': '1',
        'nick':'portrait',
        'file_name':'2001.jpg',
        'caption':'ensign'
    },
    {
        'seq':'2',
        'nick':'wingmanbright',
        'file_name':'2002.jpg',
        'caption':'wing33'
    },
    {
        'seq':'3',
        'nick':'wingmandark',
        'file_name':'2003.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'4',
        'nick':'wingmandark',
        'file_name':'2004.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'5',
        'nick':'wingmandark',
        'file_name':'2005.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'6',
        'nick':'wingmandark',
        'file_name':'2006.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'7',
        'nick':'wingmandark',
        'file_name':'2007.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'8',
        'nick':'wingmandark',
        'file_name':'2008.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'9',
        'nick':'wingmandark',
        'file_name':'2009.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'30',
        'nick':'wingmandark',
        'file_name':'3000.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'32',
        'nick':'wingmandark',
        'file_name':'3002.jpg',
        'caption':'wing33 with goggles'
    },
    {
        'seq':'33',
        'nick':'wingmandark',
        'file_name':'3003.jpg',
        'caption':'wing33 with goggles'
    },
]


function load() {
  setImage(0);
}


function back() {
  if (currIdx <= 0) {
    currIdx = 0;
    return;
  }
  setImage(--currIdx);
}


function forward() {
  if (currIdx >= items.length - 1) {
    currIdx = items.length - 1;
    return;
  }
  setImage(++currIdx);
}


function setImage(index) {
  $("#centerImage").attr("src", items[index].url);
  $("#caption").text(items[index].caption);

  if (index == 0) {
    $("#backArrow").css("visibility", "hidden");
  } else {
    $("#backArrow").css("visibility", "visible");
  }

  if (index == items.length - 1) {
    $("#forwardArrow").css("visibility", "hidden");
  } else {
    $("#forwardArrow").css("visibility", "visible");
  }
}


function loadBook() {
  console.log("loadBook");
  for (var i = 0; i < 52; i++) {
    fname = '00' + (i + 1) + '.jpg';
    if (i < 9) {
      fname = '0' + fname;
    }
    fname = "book/" + fname;
    if (i == 0) {
      cap = "Cover Page";
    } else if (i == 1) {
      cap = "Page i";
    } else if (i == 2) {
      cap = "Page ii";
    } else if (i == 3) {
      cap = "Page iii";    
    } else {
      cap = "Page " + (i - 3);
    }
    items.push({
      url: fname,
      caption: cap
    });
  }
}


function loadPhotos_old() {
  photoIDs = [
    '2000','2001','2002','2003','2004','2005','2006','2007',
    '2008','2009','3000','3002','3003'
  ];
  for (var i = 0; i < photoIDs.length; i++) {
    items.push({
      url: "images/" + photoIDs[i] + ".jpg",
      caption: "Photo " + photoIDs[i] + ".jpg"
    });
  }
}


function loadPhotos() {
    for (g_item of gallery) {
        items.push({
            url: 'images/' + g_item['file_name'],
            caption: g_item['caption']
        })
    }
}

// set up the items array
var items = [];
var currIdx = 0;

if (gallerySource == 'book') {
  loadBook();
} else {
  loadPhotos();
}


