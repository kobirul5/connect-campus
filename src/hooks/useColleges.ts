import { useState, useEffect } from 'react';
import { College } from '@/data/featuredColleges';
import useAxiosPublic from '@/hooks/axiosPublic';

const useColleges = () => {
  const [colleges, setColleges] = useState<College[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axiosPublic.get('/api/collage');
        if (res.data.success) {
          setColleges(res.data.data);
        } else {
          setError('Failed to load colleges');
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [axiosPublic]);

  return { colleges, loading, error };
};

export default useColleges;
