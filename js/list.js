/**
 * What's the reason behind the favicon icon is not loading?
 * The failed loading of the favicon can cause by
 * wrong url or cors origin policies.
 *
 * If the issue is cors origin, then you can
 * download the icon and place it into the "./img/favicons/filename"
 * folder, and mention the path of the file in the favicon attribute
 *
 * And if any favicon is failed to load then the default favicon will placed.
 *
 */

const StreamingList = {
  our_sites: [
    {
      site: "https://rize-sama.github.io/streamy/",
      name: "Streamy",
      favicon: "https://rize-sama.github.io/streamy/vite.svg",
    },
  ],
  movies: [
    {
      site: "https://ww.yesmovies.ag/yes.html",
      name: "Yes Movies",
      favicon: "https://ww.yesmovies.ag/favicon.ico",
    },
    {
      site: "https://111.90.150.149/",
      name: "HD Movies Latest",
      favicon: "https://111.90.150.149/android-icon-192x192.png",
    },
    {
      site: "https://moviesjoy.plus/home",
      name: "Moviesjoy",
      favicon: "https://moviesjoy.plus/images/group_1/theme_8/favicon.png",
    },
    {
      site: "https://111.90.159.159/",
      name: "MovieMora",
      favicon: "https://111.90.159.159/apple-icon-180x180.png",
    },
    {
      site: "https://www.hdtodaytv.tv/home",
      name: "HD Today",
      favicon:
        "https://www.hdtodaytv.tv/static/images/ed2a7fa3244ddc585a0a0fdbaf835359.png",
    },
    {
      site: "https://goku.watch/home/",
      name: "Goku",
      favicon: "https://goku.watch/images/favicon.png",
    },
    {
      site: "https://sflix.to/home",
      name: "SFlix",
      favicon:
        "https://img.sflix.to/xxrz/100x100/100/a2/33/a233d4c4a1426ca77ec1d34deec62f71/a233d4c4a1426ca77ec1d34deec62f71.png",
    },
    {
      site: "https://anymovie.cc/",
      name: "Anymovie",
      favicon:
        "https://anymovie.cc/wp-content/uploads/2023/08/cropped-anymovie-favicon-192x192.png",
    },
    {
      site: "https://flix.smashystream.xyz/",
      name: "SmashyStream",
      favicon: "https://flix.smashystream.xyz/favicon.ico",
    },
    {
      site: "https://movie-web.app/search/movie/",
      name: "Movie-Web",
      favicon: "https://movie-web.app/favicon.ico",
    },
    {
      site: "https://ask4movie.li/",
      name: "Ask4Movie",
      favicon:
        "https://ask4movie.li/wp-content/uploads/2018/04/cropped-Fav-Icon-1-192x192.png",
    },
    {
      site: "https://tma.lol/",
      name: "The Movie Archive",
      favicon: "https://tma.lol/favicons/apple-touch-icon.png",
    },
    {
      site: "https://seez.su/",
      name: "seez",
      favicon: "https://seez.su/favicon.ico",
    },
  ],
  animation: [
    {
      site: "https://anime-world.in/",
      name: "Anime World",
      favicon: "https://anime-world.in/files/cropped-AW_No-Face-01-192x192.png",
    },
    {
      site: "https://aniwatch.to/",
      name: "aniWatch",
      favicon: "https://aniwatch.to/images/android-chrome-192x192.png",
    },
    {
      site: "https://animesuge.to/home",
      name: "AnimeSuge",
      favicon:
        "https://s2.bunnycdn.ru/assets/sites/animesuge/icons/favicon.png",
    },
    {
      site: "https://animepahe.ru/",
      name: "AnimePahe",
      favicon: "./img/favicons/pikacon.ico",
    },
    {
      site: "https://yugenanime.tv/",
      name: "Yugen",
      favicon: "https://yugenanime.tv/static/img/apple-touch-icon.png",
    },
    {
      site: "https://genoanime.com/",
      name: "GenoAnime",
      favicon: "https://genoanime.com/img/favicon.ico",
    },
    {
      site: "https://moopa.live/",
      name: "moopa",
      favicon: "https://moopa.live/svg/c.svg",
    },
    {
      site: "https://animeflix.live/",
      name: "AnimeFlix",
      favicon:
        "https://cdn.discordapp.com/icons/1033027031409111180/478ab202d6c2752f95758ee9d74edc34.webp?size=64",
    },
  ],
  download: [
    {
      site: "https://rareanimes.me/",
      name: "RareAnimes India",
      favicon:
        "https://rareanimes.me/wp-content/uploads/2023/11/cropped-Rare-Animes-India-192x192.png",
    },
    {
      site: "https://mlwbd.digital/",
      name: "mlwbd",
      favicon: "https://mlwbd.love/wp-content/uploads/new-mlw-bd-red.jpg",
    },
    {
      site: "https://animeout.xyz/",
      name: "AnimeOut",
      favicon:
        "https://cdn.animeout.xyz/wp-content/uploads/2015/12/AnimeOut-Bookmark-icon-logo-v3.png",
    },
    {
      site: "https://anidl.org/",
      name: "AniDL",
      favicon:
        "https://i0.wp.com/anidl.org/wp-content/uploads/2018/12/cropped-photo_2017-01-30_02-14-16-2-2.png",
    },
    {
      site: "https://84.46.254.230/",
      name: "MkvKing",
      favicon:
        "https://84.46.254.230/wp-content/uploads/2022/03/cropped-Mkvking-Logo-192x192.png",
    },
    {
      site: "https://ripcrabbyanime.com/",
      name: "RIPCRABBYANIME",
      favicon:
        "https://ripcrabbyanime.in/Img/Ripcrabbyanime.logo.cropped.180x180.png",
    },
    {
      site: "https://olamovies.homes/",
      name: "OlaMovies",
      favicon:
        "https://olamovies.homes/wp-content/uploads/2020/05/cropped-emoji-1-192x192.png",
    },
    {
      site: "https://katmoviehd.mov/",
      name: "KatMovie HD",
      favicon:
        "https://katmoviehd.mov/wp-content/uploads/2019/03/android-icon-144x144-2.png",
    },
    {
      site: "https://worldfree4u.markets/",
      name: "World Free 4u",
      favicon:
        "https://worldfree4u.markets/wp-content/themes/worldfree4u/assets/favicon-32x32.png",
    },
    {
      site: "https://bolly4u.fan/",
      name: "Bolly4U",
      favicon:
        "https://bolly4u.fan/wp-content/themes/bolly4u/assets/favicon-32x32.png",
    },
    {
      site: "https://medeberiyaa.com/",
      name: "Medebriya",
      favicon:
        "https://medeberiyaa.com/wp-content/uploads/2019/07/cropped-favicon-1-180x180.jpg",
    },
    {
      site: "https://uhdmovies.wiki/",
      name: "UHDMovies",
      favicon:
        "https://uhdmovies.wiki/wp-content/uploads/2021/03/cropped-output-onlinepngtools-1-192x192.png",
    },
    {
      site: "https://seriesway.com/",
      name: "SeriesWay",
      favicon: "https://seriesway.com/shared/assets/img/favicon.ico",
    },
  ],
  torrents: [
    {
      site: "https://rargb.to/",
      name: "RARBG",
      favicon: "https://rargb.to/favicon.ico",
    },
    {
      site: "https://www.1337x.tw/",
      name: "1337x",
      favicon: "https://www.13377x.tw/images/favicon.ico",
    },
    {
      site: "https://piratebayproxy.net/",
      name: "PirateBay",
      favicon:
        "https://piratebayproxy.net/wp-content/uploads/2021/08/pirate-bay-proxy.svg",
    },
    {
      site: "https://ny.iss.one/",
      name: "Nyaa.si",
      favicon: "https://ny.iss.one/static/favicon.png",
    },
  ],
};
