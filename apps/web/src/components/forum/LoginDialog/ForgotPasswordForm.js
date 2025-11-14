import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogFooter } from '@/components/ui/dialog';
import { FormMessage } from './FormMessage';

export function ForgotPasswordForm({
  formData,
  error,
  success,
  isLoading,
  onSubmit,
  onChange
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 py-4">
        <FormMessage error={error} success={success} />

        <div className="grid gap-2">
          <Label htmlFor="email">邮箱 *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            value={formData.email}
            onChange={onChange}
            disabled={isLoading}
            required
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? '发送中...' : '发送重置链接'}
        </Button>
      </DialogFooter>
    </form>
  );
}
