
export async function searchImages(searchTerm) {
  const searchParams = new URLSearchParams({
    key: '42800487-0338ab50e10ef15f71fc3313e',
    q: `${searchTerm.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  console.log(searchParams.toString());
  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log(url);
  const options = {
    method: 'GET',
  };
  return await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      return { images: data.hits, totalImages: data.totalHits };
    });
}