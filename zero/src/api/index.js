import requests from "./request";
const getMyIntroduce = () => {
  return requests({
    method: 'post',
    url: '/introduce/getintroduce',
    data: {
      queryKey: 'all'
    }
  })
}
export {
  getMyIntroduce,
}