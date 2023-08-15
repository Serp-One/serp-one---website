export const useSerpApi = () => {
  const getPosition = async (data: any) => {
    const response = await (
      await fetch('/api/serp', { method: "post", body: JSON.stringify(data)})
    ).json();
    return response;
  };
  return { getPosition };
};

export default useSerpApi;
