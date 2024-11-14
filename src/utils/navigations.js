// Navigation.js
import PlanIcon from '/plan-list-svgrepo-com.svg';
import TaskListIcon from '/task-svgrepo-com.svg';
import BinIcon from '/bin-delete-remove-trash-svgrepo-com.svg';
import PendingIcon from '/shifts-pending-svgrepo-com.svg';
import UpcommingIcon from '/watch-square-minimalistic-svgrepo-com.svg';
import CompletedIcon from '/complete-ok-accept-good-tick-svgrepo-com.svg';

const navigationItems = [
  {
    name: 'Today\'s',
    icon: PlanIcon,
    href: '/',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Overdue',
    icon: PendingIcon,
    href: '/overdue',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Upcomming',
    icon: UpcommingIcon,
    href: '/upcomming',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Completed',
    icon: CompletedIcon,
    href: '/completed',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Trash',
    icon: BinIcon,
    href: '/trash',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
];

export default navigationItems;
