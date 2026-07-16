---
description: "If Single Sign-On (SSO) is unavailable or you have forgotten the password for a local WordPress user, reset it from the OS Cloud panel."
audience: customers
---

# Reset a WordPress administrator password

If Single Sign-On (SSO) is unavailable or you have forgotten the password for a local WordPress user, reset it from the OS Cloud panel. You need sufficient permissions for the relevant application.

## Change the password

1. Open the correct website application in OS Cloud.
2. Select **Users** in the application menu.
3. Find the correct WordPress user and verify the associated email address.
4. Open the menu with three vertical dots and select **Edit**.
5. Set a unique, long password and save the change.
6. Open `/wp-admin` in a private browser window and test the username with the new password.

Use a password manager and do not reuse the password for OS Cloud, email or another website. Update stored credentials on any device or in any automation that uses this WordPress account.

## If sign-in still fails

- Confirm that you are using the correct username and website.
- Do not confuse SSO with the local WordPress login method.
- Check whether a security plugin or login restriction has temporarily blocked the account.
- Clear browser cookies only for the affected website and try again.

::: warning
Only reset the password of an account you are authorised to manage. Give team members personal accounts instead of sharing one administrator login.
:::
