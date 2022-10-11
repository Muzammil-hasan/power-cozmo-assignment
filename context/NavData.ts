import {
  BuildingStorefrontIcon,
  PhoneArrowDownLeftIcon,
  QueueListIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import HomeIcon from '@mui/icons-material/Home';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

export default [
  { name: 'Dashboard', path: '/dashboard', Icon: HomeIcon },
  { name: 'My profile', path: '/account', Icon: UserIcon },
  { name: 'seller', path: '/seller', Icon: BuildingStorefrontIcon },
  { name: 'categories', path: '/categories', Icon: HorizontalSplitOutlinedIcon },
  { name: 'attribute', path: '/attribute', Icon: TagIcon },
  { name: 'brands', path: '/brands', Icon: ShoppingCartIcon },
  { name: 'conversations', path: '/conversations', Icon: QuestionAnswerOutlinedIcon },
  { name: 'enquiry center', path: '/enquiry-center', Icon: QueueListIcon },
  { name: 'contact us', path: '/contact-us', Icon: PhoneArrowDownLeftIcon },
];
