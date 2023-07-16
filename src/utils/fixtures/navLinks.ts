import { Routes } from '@/src/utils/enums/routes';
import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

export type NavLink = {
  i18nKey: keyof IntlMessages['Header'];
  link: Routes | '#';
  icon: any;
  disabled?: boolean;
};

export const navLinks: NavLink[] = [
  {
    i18nKey: 'createPoll',
    link: Routes.CreatePoll,
    icon: ChartBarIcon,
    disabled: false,
  },
  {
    i18nKey: 'scheduleMeeting',
    link: '#',
    icon: CalendarIcon,
    disabled: true,
  },
  {
    i18nKey: 'demo',
    link: '#',
    icon: CursorArrowRaysIcon,
    disabled: true,
  },
  {
    i18nKey: 'pricing',
    link: '#',
    icon: CreditCardIcon,
    disabled: true,
  },
];

export const additionalMobileMenuLinks: Omit<NavLink, 'icon'>[] = [];
