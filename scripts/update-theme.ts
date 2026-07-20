/**
 * Update theme from upstream repository
 * Usage: pnpm update-theme
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Check and set up the remote repository
try {
  execSync('git remote get-url upstream', { stdio: 'ignore' })
}
catch {
  execSync('git remote add upstream https://github.com/radishzzz/astro-theme-retypeset.git', { stdio: 'inherit' })
}

// Update theme from upstream repository
try {
  execSync('git fetch upstream', { stdio: 'inherit' })

  const beforeHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
  execSync('git merge upstream/master --allow-unrelated-histories', { stdio: 'inherit' })
  const afterHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()

  if (beforeHash === afterHash) {
    console.log('✅ Already up to date')
  }
  else {
    console.log('✨ Updated successfully')
  }
}
catch (error) {
  // Check if there's a merge conflict
  const gitDir = execSync('git rev-parse --git-dir', { encoding: 'utf8' }).trim()
  const mergeHeadPath = path.join(gitDir, 'MERGE_HEAD')

  if (fs.existsSync(mergeHeadPath)) {
    console.log('⚠️ Update fetched with merge conflicts. Please resolve manually')
  }
  else {
    console.error('❌ Update failed:', error)
    process.exit(1)
  }
}
