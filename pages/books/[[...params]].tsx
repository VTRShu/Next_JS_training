import { useRouter } from 'next/router';

export default function BooksCover() {
  const router = useRouter();
  const { params } = router.query;
  return (
    <>
      {params && params?.length > 2 ? (
        <div>Page books has more than 2 feature</div>
      ) : (
        <div>
          Page books has feature 1 is {params && params[0]} and feature 2 is{' '}
          {params && params[1]}
        </div>
      )}
    </>
  );
}
