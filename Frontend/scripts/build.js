import { execSync } from 'child_process';

try {
  execSync('npx vite build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
