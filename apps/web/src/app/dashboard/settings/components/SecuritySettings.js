'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SecuritySettings({ settings, handleBooleanChange, saving }) {
  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-1'>安全设置</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          配置邮箱验证和内容审核等安全功能
        </p>
      </div>

      {/* 邮箱验证开关 */}
      {settings.email_verification_required && (
        <div className='border border-border rounded-lg bg-card'>
          <div className='px-4 py-4'>
            <div className='flex items-center justify-between'>
              <div className='space-y-1 flex-1'>
                <Label htmlFor='email_verification_required' className='text-sm font-semibold'>
                  邮箱验证要求
                </Label>
                <p className='text-sm text-muted-foreground'>
                  {settings.email_verification_required.description}
                </p>
              </div>
              <Switch
                id='email_verification_required'
                checked={settings.email_verification_required.value}
                onCheckedChange={(checked) =>
                  handleBooleanChange('email_verification_required', checked)
                }
                disabled={saving}
              />
            </div>
          </div>
        </div>
      )}

      {/* 内容审核开关 */}
      {settings.content_moderation_enabled && (
        <div className='border border-border rounded-lg bg-card'>
          <div className='px-4 py-4'>
            <div className='flex items-center justify-between'>
              <div className='space-y-1 flex-1'>
                <Label htmlFor='content_moderation_enabled' className='text-sm font-semibold'>
                  内容审核
                </Label>
                <p className='text-sm text-muted-foreground'>
                  {settings.content_moderation_enabled.description}
                </p>
              </div>
              <Switch
                id='content_moderation_enabled'
                checked={settings.content_moderation_enabled.value}
                onCheckedChange={(checked) =>
                  handleBooleanChange('content_moderation_enabled', checked)
                }
                disabled={saving}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
