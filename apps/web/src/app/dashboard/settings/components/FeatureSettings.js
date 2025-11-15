'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { RegistrationSettings } from './RegistrationSettings';
import { SecuritySettings } from './SecuritySettings';
import { AuthenticationSettings } from './AuthenticationSettings';
import { UserManagementSettings } from './UserManagementSettings';
import { SpamProtectionSettings } from './SpamProtectionSettings';
import {
  KeyRound,
  Shield,
  Scan,
  Users,
  ShieldAlert
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const navigationItems = [
  {
    id: 'registration',
    label: '注册设置',
    icon: KeyRound,
    description: '控制用户如何注册账号',
  },
  {
    id: 'security',
    label: '安全设置',
    icon: Shield,
    description: '邮箱验证和内容审核',
  },
  {
    id: 'authentication',
    label: '认证方式',
    icon: Scan,
    description: '扫码登录等认证功能',
  },
  {
    id: 'user-management',
    label: '用户管理',
    icon: Users,
    description: '用户信息修改权限',
  },
  {
    id: 'spam-protection',
    label: '垃圾拦截',
    icon: ShieldAlert,
    description: '防止垃圾注册',
  },
];

export function FeatureSettings({ settings, handleStringChange, handleBooleanChange, handleNumberChange, saving }) {
  const [activeTab, setActiveTab] = useState('registration');

  const activeItem = navigationItems.find(item => item.id === activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case 'registration':
        return (
          <RegistrationSettings
            settings={settings}
            handleStringChange={handleStringChange}
            saving={saving}
          />
        );
      case 'security':
        return (
          <SecuritySettings
            settings={settings}
            handleBooleanChange={handleBooleanChange}
            saving={saving}
          />
        );
      case 'authentication':
        return (
          <AuthenticationSettings
            settings={settings}
            handleBooleanChange={handleBooleanChange}
            handleNumberChange={handleNumberChange}
            saving={saving}
          />
        );
      case 'user-management':
        return (
          <UserManagementSettings
            settings={settings}
            handleBooleanChange={handleBooleanChange}
            handleNumberChange={handleNumberChange}
            saving={saving}
          />
        );
      case 'spam-protection':
        return (
          <SpamProtectionSettings
            settings={settings}
            handleBooleanChange={handleBooleanChange}
            saving={saving}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='space-y-6'>
      {/* 移动端选择器 */}
      <div className='lg:hidden'>
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className='w-full'>
            <SelectValue>
              {activeItem && (
                <div className='flex items-center gap-2'>
                  <activeItem.icon className='h-4 w-4' />
                  <span>{activeItem.label}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <SelectItem key={item.id} value={item.id}>
                  <div className='flex items-center gap-2'>
                    <Icon className='h-4 w-4' />
                    <div>
                      <div className='font-medium'>{item.label}</div>
                      <div className='text-xs text-muted-foreground'>{item.description}</div>
                    </div>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      {/* 桌面端：左右布局 */}
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* 左侧导航 */}
        <aside className='hidden lg:block lg:w-64 flex-shrink-0'>
          <nav className='space-y-1'>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    'w-full flex items-start gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-card hover:bg-muted/50 text-foreground border border-border'
                  )}
                >
                  <Icon className={cn(
                    'h-5 w-5 flex-shrink-0 mt-0.5',
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                  )} />
                  <div className='flex-1 min-w-0'>
                    <div className={cn(
                      'font-medium text-sm',
                      isActive ? 'text-primary-foreground' : 'text-foreground'
                    )}>
                      {item.label}
                    </div>
                    <div className={cn(
                      'text-xs mt-0.5 line-clamp-2',
                      isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    )}>
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* 右侧内容区域 */}
        <main className='flex-1 min-w-0'>
          <div className='bg-card rounded-lg border border-border p-4 sm:p-6'>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
