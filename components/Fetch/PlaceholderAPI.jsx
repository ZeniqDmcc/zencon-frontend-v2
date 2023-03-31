import useFetch from "./useFetch";

function PlaceholderAPI() {
  const { data, isLoading } = useFetch('https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div> PlaceholderAPI
      {
        data && data.map((item) => {
          return <div className='box'>
                <h4>{ item.name }</h4>

          </div>
        })
      }
      <h1>Completed: { data.completed ? 'Yes' : 'No'}</h1>
    </div>
  );
}

export default PlaceholderAPI;
