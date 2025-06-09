WidgetMetadata = {
    id: "forward.tmdb",
    title: "自用-TMDB",
    description: "自用-TMDB",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    author: "xxx",
    modules: [
        // --- 平台筛选模块---
        {
            title: "TMDB 播出平台",
            description: "按播出平台和内容类型筛选剧集内容",
            requiresWebView: false,
            functionName: "tmdbDiscoverByNetwork",
            params: [
                {
                    name: "with_networks",
                    title: "播出平台",
                    type: "enumeration",
                    description: "选择一个平台以查看其剧集内容",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "Tencent", value: "2007" },
                        { title: "iQiyi", value: "1330" },
                        { title: "Youku", value: "1419" },
                        { title: "Bilibili", value: "1605" },
                        { title: "MGTV", value: "1631" },
                        { title: "Netflix", value: "213" },
                        { title: "Disney+", value: "2739" },
                        { title: "HBO Max", value: "3186" },
                        { title: "Apple TV+", value: "2552" },
                        { title: "Hulu", value: "453" },
                        { title: "Amazon Prime Video", value: "1024" },
                        { title: "Paramount", value: "576" },
                        { title: "Paramount+", value: "4330" },
                        { title: "TVing", value: "3897" },
                        { title: "Wavve", value: "3357" },
                        { title: "TV Tokyo", value: "94" },
                        { title: "Line TV", value: "1671" },
                        { title: "HamiVideo", value: "4571" },
                        { title: "WeTV", value: "3732" },
                        { title: "iQIYI 国际", value: "6316" },
                        { title: "Youtube", value: "247" },
                        { title: "TVB", value: "48" },
                        { title: "Viu TV", value: "2146" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "选择内容排序方式,默认上映时间↓",
                    value: "first_air_date.desc",
                    enumOptions: [
                        { title: "上映时间↓", value: "first_air_date.desc" },
                        { title: "上映时间↑", value: "first_air_date.asc" },
                        { title: "人气最高", value: "popularity.desc" },

                        { title: "评分最高", value: "vote_average.desc" },
                        { title: "最多投票", value: "vote_count.desc" }
                    ]
                },
                {
                    name: "air_status",
                    title: "上映状态",
                    type: "enumeration",
                    description: "默认已上映",
                    value: "released",
                    enumOptions: [
                        { title: "已上映", value: "released" },
                        { title: "未上映", value: "upcoming" }
                    ]
                },
                {
                    name: "with_genres",
                    title: "内容类型",
                    type: "enumeration",
                    description: "选择要筛选的内容类型",
                    value: "",
                    enumOptions: [
                        { title: "全部类型", value: "" },
                        { title: "犯罪", value: "80" },
                        { title: "动画", value: "16" },
                        { title: "喜剧", value: "35" },
                        { title: "剧情", value: "18" },
                        { title: "家庭", value: "10751" },
                        { title: "儿童", value: "10762" },
                        { title: "悬疑", value: "9648" },
                        { title: "真人秀", value: "10764" },
                        { title: "脱口秀", value: "10767" },
                        { title: "肥皂剧", value: "10766" },
                        { title: "纪录片", value: "99" },
                        { title: "动作与冒险", value: "10759" },
                        { title: "科幻与奇幻", value: "10765" },
                        { title: "战争与政治", value: "10768" }
                    ]
                },
                { name: "page", title: "页码", type: "page" },
                { name: "language", title: "语言", type: "language", value: "zh-CN" }
            ]
        },
        // --- 出品公司模块 ---
        {
            id: "companies",
            title: "TMDB 出品公司",
            functionName: "tmdbCompanies",
            params: [
                {
                    name: "with_companies",
                    title: "出品公司",
                    type: "enumeration",
                    value: "",
                    description: "选择一个公司以查看其剧集内容",
                    belongTo: {
                        paramName: "air_status",
                        value: ["released", "upcoming"],
                    },
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "Disney", value: "2" },
                        { title: "Warner Bros", value: "174" },
                        { title: "Columbia", value: "5" },
                        { title: "Sony", value: "34" },
                        { title: "Universal", value: "33" },
                        { title: "Paramount", value: "4" },
                        { title: "20th Century", value: "25" },
                        { title: "Marvel", value: "420" },
                        { title: "Toho", value: "882" },
                        { title: "中国电影集团公司", value: "14714" },
                        { title: "BBC", value: "3324" },
                        { title: "印度", value: "1569" },
                        { title: "A24", value: "41077" },
                        { title: "Blumhouse", value: "3172" },
                        { title: "Working Title Films", value: "10163" }
                    ]
                },
                {
                    name: "with_genres",
                    title: "🎭内容类型",
                    type: "enumeration",
                    description: "选择要筛选的内容类型",
                    value: "",
                    belongTo: {
                        paramName: "air_status",
                        value: ["released", "upcoming"],
                    },
                    enumOptions: [
                        { title: "全部类型", value: "" },
                        { title: "冒险", value: "12" },
                        { title: "剧情", value: "18" },
                        { title: "动作", value: "28" },
                        { title: "动画", value: "16" },
                        { title: "历史", value: "36" },
                        { title: "喜剧", value: "35" },
                        { title: "奇幻", value: "14" },
                        { title: "家庭", value: "10751" },
                        { title: "恐怖", value: "27" },
                        { title: "悬疑", value: "9648" },
                        { title: "惊悚", value: "53" },
                        { title: "战争", value: "10752" },
                        { title: "爱情", value: "10749" },
                        { title: "犯罪", value: "80" },
                        { title: "科幻", value: "878" },
                        { title: "记录", value: "99" },
                        { title: "西部", value: "37" },
                        { title: "音乐", value: "10402" },
                        { title: "电视电影", value: "10770" }
                    ]
                },
                {
                    name: "air_status",
                    title: "上映状态",
                    type: "enumeration",
                    description: "默认已上映",
                    value: "released",
                    enumOptions: [
                        { title: "已上映", value: "released" },
                        { title: "未上映", value: "upcoming" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "🔢 排序方式",
                    type: "enumeration",
                    description: "选择内容排序方式,默认上映时间↓",
                    value: "primary_release_date.desc",
                    enumOptions: [
                        { title: "上映时间↓", value: "primary_release_date.desc" },
                        { title: "上映时间↑", value: "primary_release_date.asc" },
                        { title: "人气最高", value: "popularity.desc" },
                        { title: "评分最高", value: "vote_average.desc" },
                        { title: "最多投票", value: "vote_count.desc" }
                    ]
                },
                { name: "page", title: "页码", type: "page" },
                { name: "language", title: "语言", type: "language", value: "zh-CN" }
            ]
        }
    ]
};

// ===============辅助函数===============
function formatItemDescription(item) {
    let description = item.description || '';
    const hasRating = /评分|rating/i.test(description);
    const hasYear = /年份|year/i.test(description);

    if (item.rating && !hasRating) {
        description = `评分: ${item.rating} | ${description}`;
    }

    if (item.releaseDate && !hasYear) {
        const year = String(item.releaseDate).substring(0, 4);
        if (/^\d{4}$/.test(year)) {
            description = `年份: ${year} | ${description}`;
        }
    }

    return description
        .replace(/^\|\s*/, '')
        .replace(/\s*\|$/, '')
        .trim();
}

function createErrorItem(id, title, error) {
    const errorMessage = String(error?.message || error || '未知错误');
    const uniqueId = `error-${id.replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}`;
    return {
        id: uniqueId,
        type: "error",
        title: title || "加载失败",
        description: `错误详情：${errorMessage}`
    };
}

function calculatePagination(params) {
    let page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 20;

    if (typeof params.start !== 'undefined') {
        page = Math.floor(parseInt(params.start) / limit) + 1;
    }

    if (page < 1) page = 1;
    if (limit > 50) throw new Error("单页数量不能超过50");

    const start = (page - 1) * limit;
    return { page, limit, start };
}

function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// ===============TMDB功能函数===============
async function fetchTmdbData(api, params) {
    try {
        const tmdbParams = { ...params };
        delete tmdbParams.type;
        delete tmdbParams.time_window;
        const response = await Widget.tmdb.get(api, { params: tmdbParams });
        if (!response?.results) {
            throw new Error(response?.status_message || "无效的API响应格式");
        }
        return response.results.map(item => {
            const isMovie = api.includes('movie') || item.media_type === 'movie';
            const mediaType = isMovie ? 'movie' : 'tv';
            return {
                id: item.id,
                type: "tmdb",
                mediaType: mediaType,
                title: isMovie ? item.title : item.name,
                description: formatItemDescription({
                    description: item.overview,
                    rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined,
                    releaseDate: isMovie ? item.release_date : item.first_air_date
                }),
                releaseDate: isMovie ? item.release_date : item.first_air_date,
                backdropPath: item.backdrop_path && `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
                posterPath: item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                rating: item.vote_average ? (item.vote_average / 2).toFixed(1) : undefined
            };
        }).filter(item => item.id && item.title);
    } catch (error) {
        console.error(`API调用失败: ${api}`, error);
        return [createErrorItem(api, '数据加载失败', error)];
    }
}

async function tmdbNowPlaying(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? "movie/now_playing" : "tv/on_the_air";
    return await fetchTmdbData(api, params);
}

async function tmdbTrending(params) {
    const timeWindow = params.time_window || 'day';
    const api = `trending/all/${timeWindow}`;
    return await fetchTmdbData(api, params);
}


async function tmdbTopRated(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;
    return await fetchTmdbData(api, params);
}

async function tmdbUpcomingMovies(params) {
    const api = "discover/movie";
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        sort_by: 'primary_release_date.asc',
        'primary_release_date.gte': params['primary_release_date.gte'] || getCurrentDate(),
        with_release_type: params.with_release_type || '2,3'
    };
    if (params['primary_release_date.lte']) discoverParams['primary_release_date.lte'] = params['primary_release_date.lte'];
    if (params.with_genres) discoverParams.with_genres = params.with_genres;
    if (params['vote_average.gte']) discoverParams['vote_average.gte'] = params['vote_average.gte'];
    if (params['vote_count.gte']) discoverParams['vote_count.gte'] = params['vote_count.gte'];
    if (params.with_keywords) discoverParams.with_keywords = params.with_keywords;
    return await fetchTmdbData(api, discoverParams);
}

async function tmdbDiscoverByNetwork(params = {}) {
    const api = "discover/tv";
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        with_networks: params.with_networks,
        sort_by: params.sort_by,
        ...(params.air_status === 'released' && {
            'first_air_date.lte': getCurrentDate()
        }),
        ...(params.air_status === 'upcoming' && {
            'first_air_date.gte': getCurrentDate()
        }),
        ...(params.with_genres && { with_genres: params.with_genres })
    };
    return await fetchTmdbData(api, discoverParams);
}

async function tmdbCompanies(params = {}) {
  try {
    const api = "discover/movie";
    const withCompanies = String(params.with_companies || '').trim();

    const cleanParams = {
      page: params.page || 1,
      language: params.language || "zh-CN",
      sort_by: params.sort_by || "primary_release_date.desc",
    };

    if (withCompanies) {
      cleanParams.with_companies = withCompanies;
    }

    const currentDate = getCurrentDate();
    if (params.air_status === 'released') {
      cleanParams['primary_release_date.lte'] = currentDate;
    } else if (params.air_status === 'upcoming') {
      cleanParams['primary_release_date.gte'] = currentDate;
    }

    if (params.with_genres) {
      cleanParams.with_genres = String(params.with_genres).trim();
    }

    console.log('TMDB请求参数:', cleanParams);
    return await fetchTmdbData(api, cleanParams);
    
  } catch (error) {
    console.error('公司数据加载失败:', error);
    return [createErrorItem('companies', '数据加载失败', error)];
  }
}
