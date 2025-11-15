'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

export function AuthenticationSettings({ settings, handleBooleanChange, handleNumberChange, saving }) {
  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-1'>认证方式</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          配置用户登录和认证相关功能
        </p>
      </div>

      {/* 扫码登录功能 */}
      {settings.qr_login_enabled && (
        <div className='border border-border rounded-lg bg-card'>
          <div className='px-4 py-4'>
            <div className='flex items-center justify-between'>
              <div className='space-y-1 flex-1'>
                <Label htmlFor='qr_login_enabled' className='text-sm font-semibold'>
                  扫码登录功能
                </Label>
                <p className='text-sm text-muted-foreground'>
                  允许用户使用手机App扫描二维码登录
                </p>
              </div>
              <Switch
                id='qr_login_enabled'
                checked={settings.qr_login_enabled.value}
                onCheckedChange={(checked) =>
                  handleBooleanChange('qr_login_enabled', checked)
                }
                disabled={saving}
              />
            </div>

            {/* 二维码有效期设置 */}
            {settings.qr_login_enabled.value && settings.qr_login_timeout && (
              <div className='mt-4 pt-4 border-t border-border'>
                <div className='flex items-center justify-between gap-4'>
                  <div className='space-y-1 flex-1'>
                    <Label htmlFor='qr_login_timeout' className='text-sm font-medium'>
                      二维码有效期（秒）
                    </Label>
                    <p className='text-sm text-muted-foreground'>
                      二维码登录请求的有效期，建议设置为 60-600 秒
                    </p>
                  </div>
                  <Input
                    id='qr_login_timeout'
                    type='number'
                    min='60'
                    max='600'
                    className='w-24'
                    value={settings.qr_login_timeout.value}
                    onChange={(e) =>
                      handleNumberChange('qr_login_timeout', e.target.value)
                    }
                    disabled={saving}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
