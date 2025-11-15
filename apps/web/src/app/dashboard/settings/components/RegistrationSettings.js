'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RegistrationSettings({ settings, handleStringChange, saving }) {
  if (!settings.registration_mode) return null;

  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-1'>注册模式</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          控制用户如何注册账号
        </p>
      </div>

      <div className='border border-border rounded-lg bg-card'>
        <div className='p-4 flex items-center justify-between'>
          <div className='space-y-1 flex-1'>
            <Label htmlFor='registration_mode' className='text-sm font-semibold'>
              注册模式
            </Label>
            <p className='text-sm text-muted-foreground'>
              {settings.registration_mode.description}
            </p>
          </div>
          <Select
            value={settings.registration_mode.value}
            onValueChange={(value) => handleStringChange('registration_mode', value)}
            disabled={saving}
          >
            <SelectTrigger className='max-w-xs'>
              <SelectValue>
                {settings.registration_mode.value === 'open' && '开放注册'}
                {settings.registration_mode.value === 'invitation' && '邀请注册'}
                {settings.registration_mode.value === 'closed' && '关闭注册'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='open'>
                <div className='flex items-center gap-2'>
                  <span>🌐</span>
                  <div>
                    <div className='font-medium'>开放注册</div>
                    <div className='text-xs text-muted-foreground'>
                      任何人都可以注册
                    </div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='invitation'>
                <div className='flex items-center gap-2'>
                  <span>🎫</span>
                  <div>
                    <div className='font-medium'>邀请码注册</div>
                    <div className='text-xs text-muted-foreground'>
                      需要邀请码才能注册
                    </div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value='closed'>
                <div className='flex items-center gap-2'>
                  <span>🔒</span>
                  <div>
                    <div className='font-medium'>关闭注册</div>
                    <div className='text-xs text-muted-foreground'>
                      暂停所有新用户注册
                    </div>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
