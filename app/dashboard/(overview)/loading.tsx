import DashboardSkeleton from '@/app/ui/skeletons';

// that will be show until page not full loaded
export default function Loading() {
    return <DashboardSkeleton />;   // any markup will be shown here while page loading
  }