<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

// This file was the current value of auto_prepend_file during the Wordfence WAF installation (Fri, 14 Jun 2019 19:48:50 +0000)
if (file_exists('/home/agiscotts/schdm.com/wordfence-waf.php')) {
	include_once '/home/agiscotts/schdm.com/wordfence-waf.php';
}
if (file_exists('/home/agiscotts/schdm.com/wp-content/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", '/home/agiscotts/schdm.com/wp-content/wflogs/');
	include_once '/home/agiscotts/schdm.com/wp-content/plugins/wordfence/waf/bootstrap.php';
}
?>