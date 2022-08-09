import requests from "./request";
const getMyIntroduce = () => {
  return requests({
    method: 'post',
    url: '/introduce/getintroduce',
    data: {
      queryKey: 'all'
    }
  })
};
const createBbs=(data)=>{
  return requests({
    url: '/api/guest/bbs',
    method: 'post',
    data
  })
};
const getBbsPageList=(params)=>{
  return requests({
    url: '/api/guest/bbs/page',
    method: 'post',
    data: JSON.stringify(params)
  })
};

export {
  getMyIntroduce,createBbs,getBbsPageList,
}