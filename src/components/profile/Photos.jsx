import Skeleton from 'react-loading-skeleton';

const Photos = ({ photos }) => {
  return (
    <div className="h-16 border-t border-gray mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos ? (
          <>
            {[...new Array(9)].map((_, index) => (
              <Skeleton key={index} width={320} height={400} count={1} />
            ))}
          </>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.docId} className="relative group">
              <img src={photo.imageSrc} alt={photo.caption} />
            </div>
          ))
        ) : null}
      </div>
      {!photos || (photos.length === 0 && <p className="text-center text-2xl">No Photos Yet</p>)}
    </div>
  );
};

export default Photos;
