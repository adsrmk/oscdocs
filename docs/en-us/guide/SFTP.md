---
description: "OS Cloud provides file access through SFTP over SSH."
audience: customers
---

# Connect securely using SFTP

OS Cloud provides file access through **SFTP over SSH**. Unencrypted FTP and SSH logins using only a password are unavailable for security reasons. You therefore use a personal key pair and the username of an FTP/SFTP account.

## Before you begin

You need:

- an FTP/SFTP account in the OS Cloud panel;
- an SSH key pair for which only you possess the private key;
- an SFTP client such as Termius, WinSCP, Cyberduck or FileZilla;
- the hostname and port shown in the panel.

::: danger Protect your private key
Upload only the **public key** to OS Cloud. Never share the private key or store it in a public cloud folder or repository.
:::

## Configure the connection

1. Create an [SSH key](/en-us/guide/SSH) and add the public key in the OS Cloud panel.
2. Under **Advanced → FTP**, create an account or select an existing one.
3. Select **SFTP** in your client—not FTP or FTPS.
4. Enter the hostname shown in the panel. Use port `22` unless a different port is listed.
5. Enter the username of the FTP/SFTP account.
6. Select your private key as the authentication method and connect.
7. Verify the host fingerprint before accepting it on the first connection.

## Troubleshooting

- **Permission denied (publickey):** confirm that the correct public key is attached to the account and that the client uses the corresponding private key.
- **Connection timed out:** check the hostname, port, VPN and local firewall. Test over another network if necessary.
- **Connection refused:** confirm that you selected SFTP and that the account is active.
- **Cannot access a directory:** check the configured root path and [file permissions](/en-us/guide/chmod). Do not increase permissions without understanding the impact.
- **Host key changed:** do not accept the new key automatically. Confirm with support that the server change is legitimate.

The connection is working when you can open the assigned root directory and upload, download and delete a test file.
