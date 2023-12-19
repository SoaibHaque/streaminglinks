const fun_index = {
  defaultFavicon: function () {
    this.src = "./img/favicons/default.png";
    this.alt = "default";
  },
  showList: function () {
    for (let category in StreamingList) {
      let site_container = document.createElement("div");
      let categoryName = document.createElement("h1");
      let ul = document.createElement("ul");

      ul.className = "list";
      site_container.className = "site_container";
      categoryName.innerText = `${category.replaceAll("_", " ")} (${
        StreamingList[category].length
      })`;

      let list = StreamingList[category].map((item) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let img = document.createElement("img");
        let name = document.createElement("span");

        if (item.favicon.trim() === "") fun_index.defaultFavicon.bind(img)();
        else img.src = item.favicon;

        img.alt = item.name.toLowerCase();
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
  changeViewMode: function () {
    if (this.dataset.view === "list")
      document.querySelector(".site_links").classList.remove("grid_view");
    else if (this.dataset.view === "grid")
      document.querySelector(".site_links").classList.add("grid_view");

    document.querySelector("header span.active")?.classList.remove("active");
    document
      .querySelector(`header span[data-view="${this.dataset.view}"]`)
      .classList.add("active");

    localStorage.setItem("view_mode", this.dataset.view);
  },
  storageInit: function () {
    const data = localStorage.getItem("view_mode");
    if (!data) {
      localStorage.setItem("view_mode", "list");
      document
        .querySelector(`header span[data-view="list"]`)
        .classList.add("active");
      return;
    }

    fun_index.changeViewMode.bind({ dataset: { view: data } })();
  },
  init: function () {
    fun_index.storageInit();
    fun_index.showList();

    document
      .querySelectorAll("header span")
      .forEach((el) => el.addEventListener("click", fun_index.changeViewMode));
  },
};

fun_index.init();
