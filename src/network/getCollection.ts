/** This can be moved to env */
const BASE_URL = 'https://wiser-solitary-shard.discover.quiknode.pro';
const KEY = '3b4f847bd81afd92c4164747b6e6f371c2abc2cc';

const getCollection = ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/${KEY}/`, {
      method: 'POST',
      headers: {
        'x-qn-api-version': '1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 67,
        jsonrpc: '2.0',
        method: 'qn_fetchNFTsByCollection',
        params: {
          collection: '0xa2b885e7065ea59a3251489715ca80de5ff642f8',
          omitFields: ['traits', 'network', 'chain', 'collectionName'],
          page: page,
          perPage: limit,
        },
      }),
    })
      .then(response => response.json())
      .then(res => {
        const formattedCollections = res?.result?.tokens?.map((token: any) => ({
          id: token?.collectionTokenId,
          name: token?.name,
          img: token?.imageUrl,
          description: token?.description,
          address: token?.collectionAddress,
        }));

        resolve({
          total: res?.result?.totalItems,
          pages: res?.result?.totalPages,
          data: formattedCollections,
        });
      })
      .catch(error => reject(error));
  });
};

export {getCollection};
