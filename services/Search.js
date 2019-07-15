import axios from "axios";

const esAxios = axios.create({
  baseURL: 'http://localhost:9200',
  timeout: 3000
});

class Search  {

  wrap(query){
    return { params: {
        source: JSON.stringify(query),
        source_content_type: 'application/json'
      }
    };
  }

  async searchGames(sort, page, size, filter) {
    const handle = "/stars/_search";
    console.log("ooo",sort);
    const query = {
      size: size,
      sort: sort,
      from: size*(page-1),
      query: { bool: { filter: filter }}
    };
    //console.log("filters",filter);
    const resp = await esAxios.get(handle, this.wrap(query));

    if(resp.status == 200){
      return resp.data.hits;
    }
    return null;
  }
}

export default new Search();
