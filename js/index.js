const fun_index = {
  defaultFavicon: function () {
    this.src = "/img/favicons/default.png";
    this.alt = "default";
  },
  showList: function () {
    for (let category in StreamingList) {
      let site_container = document.createElement("div");
      let categoryName = document.createElement("h1");
      let ul = document.createElement("ul");

      ul.className = "list";
      site_container.className = "site_container";
      categoryName.innerText = category;

      let list = StreamingList[category].map((item) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let img = document.createElement("img");
        let name = document.createElement("span");

        if (item.favicon.trim() === "") fun_index.defaultFavicon.bind(img)();
        else img.src = item.favicon;

        a.href = item.site;
        name.innerText = item.name;
        a.target = "_blank";

        name.className = "name";

        img.addEventListener("error", fun_index.defaultFavicon);

        a.append(img, name);
        li.appendChild(a);

        return li;
      });

      ul.append(...list);

      site_container.append(categoryName, ul);

      document.querySelector(".site_links").appendChild(site_container);
    }
  },
};

fun_index.showList();
