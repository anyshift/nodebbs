'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

export function SpamProtectionSettings({ settings, handleBooleanChange, handleStringChange, saving }) {
  if (!settings.spam_protection_enabled) return null;

  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-1'>垃圾注册拦截</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          使用 StopForumSpam API 检测和拦截垃圾注册
        </p>
      </div>

      {/* 总开关 */}
      <div className='border border-border rounded-lg bg-card'>
        <div className='px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='space-y-1 flex-1'>
              <Label htmlFor='spam_protection_enabled' className='text-sm font-semibold'>
                启用垃圾注册拦截
              </Label>
              <p className='text-sm text-muted-foreground'>
                {settings.spam_protection_enabled.description}
              </p>
            </div>
            <Switch
              id='spam_protection_enabled'
              checked={settings.spam_protection_enabled.value}
              onCheckedChange={(checked) =>
                handleBooleanChange('spam_protection_enabled', checked)
              }
              disabled={saving}
            />
          </div>
        </div>
      </div>

      {/* 检查类型配置 */}
      {settings.spam_protection_enabled.value && (
        <>
          {/* API Key 配置 */}
          {settings.spam_protection_api_key && (
            <div className='border border-border rounded-lg bg-card'>
              <div className='px-4 py-4 space-y-3'>
                <div className='space-y-1'>
                  <Label htmlFor='spam_protection_api_key' className='text-sm font-semibold'>
                    StopForumSpam API Key
                  </Label>
                  <p className='text-sm text-muted-foreground'>
                    {settings.spam_protection_api_key.description}
                  </p>
                </div>
                <Input
                  id='spam_protection_api_key'
                  type='text'
                  placeholder='可选，留空则使用默认限制'
                  defaultValue={settings.spam_protection_api_key.value}
                  onBlur={(e) => handleStringChange('spam_protection_api_key', e.target.value)}
                  disabled={saving}
                  className='max-w-md font-mono text-sm'
                />
                <p className='text-xs text-muted-foreground'>
                  提供 API Key 可以提高请求限制。访问 <a href='https://www.stopforumspam.com/keys' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>StopForumSpam</a> 获取免费 API Key
                </p>
              </div>
            </div>
          )}

          <div className='border border-border rounded-lg bg-card'>
          <div className='px-4 py-4 space-y-4'>
            <div>
              <h4 className='text-sm font-semibold mb-1'>检查类型</h4>
              <p className='text-sm text-muted-foreground'>
                选择要检查的信息类型（可多选）
              </p>
            </div>

            <div className='space-y-3'>
              {/* 检查 IP */}
              {settings.spam_protection_check_ip && (
                <div className='flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/30'>
                  <div className='space-y-0.5 flex-1'>
                    <Label htmlFor='spam_protection_check_ip' className='text-sm font-medium cursor-pointer'>
                      检查 IP 地址
                    </Label>
                    <p className='text-xs text-muted-foreground'>
                      验证用户的 IP 地址是否在垃圾注册数据库中
                    </p>
                  </div>
                  <Switch
                    id='spam_protection_check_ip'
                    checked={settings.spam_protection_check_ip.value}
                    onCheckedChange={(checked) =>
                      handleBooleanChange('spam_protection_check_ip', checked)
                    }
                    disabled={saving}
                  />
                </div>
              )}

              {/* 检查邮箱 */}
              {settings.spam_protection_check_email && (
                <div className='flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/30'>
                  <div className='space-y-0.5 flex-1'>
                    <Label htmlFor='spam_protection_check_email' className='text-sm font-medium cursor-pointer'>
                      检查邮箱地址
                    </Label>
                    <p className='text-xs text-muted-foreground'>
                      验证用户的邮箱地址是否在垃圾注册数据库中
                    </p>
                  </div>
                  <Switch
                    id='spam_protection_check_email'
                    checked={settings.spam_protection_check_email.value}
                    onCheckedChange={(checked) =>
                      handleBooleanChange('spam_protection_check_email', checked)
                    }
                    disabled={saving}
                  />
                </div>
              )}

              {/* 检查用户名 */}
              {settings.spam_protection_check_username && (
                <div className='flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/30'>
                  <div className='space-y-0.5 flex-1'>
                    <Label htmlFor='spam_protection_check_username' className='text-sm font-medium cursor-pointer'>
                      检查用户名
                    </Label>
                    <p className='text-xs text-muted-foreground'>
                      验证用户的用户名是否在垃圾注册数据库中
                    </p>
                  </div>
                  <Switch
                    id='spam_protection_check_username'
                    checked={settings.spam_protection_check_username.value}
                    onCheckedChange={(checked) =>
                      handleBooleanChange('spam_protection_check_username', checked)
                    }
                    disabled={saving}
                  />
                </div>
              )}
            </div>

            <Alert>
              <InfoIcon className='h-4 w-4' />
              <AlertDescription>
                如果 StopForumSpam API 调用失败或超时，系统会自动跳过检查，不会阻止正常用户注册。
              </AlertDescription>
            </Alert>
          </div>
        </div>
        </>
      )}
    </div>
  );
}
