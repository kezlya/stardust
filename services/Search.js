import axios from "axios";

const esAxios = axios.create({
  baseURL: 'https://search.anthive.io/stars-dev',
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

  async searchStars(sort, page, size, filter) {
    const handle = "/_search";
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

  async getStar(id) {
    const handle = "/_doc/"+id;
    const resp = await esAxios.get(handle, "");

    if(resp.status == 200){
      return resp.data._source;
    }
    return null;
  }
}

export default new Search();
