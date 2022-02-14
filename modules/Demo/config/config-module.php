<?php
// prevent loading directly in the browser without framelix context
if (!defined("FRAMELIX_MODULE")) {
    die();
}
// this config represents the editable configuration that can be changed by the user in the admin interface
// this should not be under version control
?>
<script type="application/json">
    {
    "compiler": {
        "Demo": {
            "js": {
                "demo": {
                    "files": [
                        {
                            "type": "folder",
                            "path": "js",
                            "recursive": true
                        }
                    ]
                }
            },
            "scss": {
                "demo": {
                    "files": [
                        {
                            "type": "folder",
                            "path": "scss",
                            "recursive": true
                        }
                    ]
                }
            }
        }
    }
}
</script>
