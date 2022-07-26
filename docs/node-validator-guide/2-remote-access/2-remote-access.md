---
title: "Step 2 - Remote Access "
sidebar_position: 2
---
:::note ToDo
- Link to LV VPN
- Grammerly
:::
# Step 2 - Remote Access
This step is optional. If you do not wish to access your node from a remote decice, proceed to Step 3.

## About SSH Access

SSH is a client-server architecture used to securely assess the terminal of a server from the terminal of a client. In this guide, the LUKSO node is the server and a personal computer is the client.

Your node should be **wired** to your network, not connected through WiFi. Remote access removes the need to keep a keyboard and monitor connect to you node and allows you to place your node hidden away near your router. Only two connections are needed, one to your router and one an electrical outlet.

### Security LAN vs. WAN access
SSH access can be setup for access from devices on your home network (LAN) only, or you can configure access from any location with an internet connection (WAN).

Enabling WAN access requires opening a port on your router, which exposes your home network to the internet. It is less secure than the LAN only option.

## Guides
Choose one of the remote access guides.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>



